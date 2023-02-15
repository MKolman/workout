import { publish } from 'gh-pages';

publish(
    'build',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/mkolman/workout.git',
        user: {
            name: 'Maks Kolman',
            email: 'maks@kolman.si',
        },
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!');
    }
);
