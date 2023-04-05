<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import IconButton from '@smui/icon-button';
	import Button from '@smui/button';
	import { getWorkoutLog, type WorkoutLog } from 'src/models/history';

	function formatDate(date: Date) {
		return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
	}

	let workouts = new Map();
	if (browser)
		getWorkoutLog().then((data) => {
			workouts = new Map(data.map((wo) => [formatDate(new Date(wo.time)), wo.time]));
		});
	const getMonthDays = (year: number, month: number) => {
		const date = new Date(year, month, 1);
		const days = [];
		while (date.getMonth() === month) {
			days.push(new Date(date));
			date.setDate(date.getDate() + 1);
		}
		return days;
	};
	const today = new Date();
	let year = today.getFullYear();
	let month = today.getMonth();
	const nextMonth = () => {
		month++;
		if (month > 11) {
			month = 0;
			year++;
		}
	};
	const prevMonth = () => {
		month--;
		if (month < 0) {
			month = 11;
			year--;
		}
	};
	const sameDay = (a: Date, b: Date) =>
		a.getFullYear() === b.getFullYear() &&
		a.getMonth() === b.getMonth() &&
		a.getDate() === b.getDate();
	$: monthDays = getMonthDays(year, month);
	$: monthName = new Date(year, month, 1).toLocaleString('default', {
		month: 'long',
		year: '2-digit',
	});
</script>

<div class="body">
	<div class="row">
		<IconButton class="material-symbols-rounded" on:click={prevMonth}>
			keyboard_arrow_left
		</IconButton>
		<span>{monthName}</span>
		<IconButton class="material-symbols-rounded" on:click={nextMonth}>
			keyboard_arrow_right
		</IconButton>
	</div>
	<div class="calendar">
		{#each monthDays as day}
			<div
				class="day"
				style={day.getDate() == 1 ? `grid-column-start: ${((day.getDay() + 6) % 7) + 1}` : ''}
			>
				<Button
					class={'btn-round small' + (sameDay(day, today) ? ' border' : '')}
					color={workouts.has(formatDate(day)) ? 'primary' : 'secondary'}
					variant="unelevated"
					on:click={() => {
						const time = workouts.get(formatDate(day));
						if (time) {
							goto(`/stats/list#${workouts.get(formatDate(day))}`);
						}
					}}
				>
					{day.getDate()}
				</Button>
			</div>
		{/each}
	</div>
</div>

<style>
	.body {
		display: flex;
		flex-direction: column;
		gap: 1em;
		overflow: auto;
		padding: 1em;
		padding-bottom: 10em;
		line-height: 2em;
	}
	.row {
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	.calendar {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		row-gap: 2em;
	}
	.day {
		display: inline-block;
		text-align: center;
	}
</style>
