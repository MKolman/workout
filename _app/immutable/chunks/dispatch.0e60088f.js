function e(t,i,s,o={bubbles:!0},d=!1){if(typeof Event>"u")throw new Error("Event not defined.");if(!t)throw new Error("Tried to dipatch event without element.");const n=new CustomEvent(i,Object.assign(Object.assign({},o),{detail:s}));if(t==null||t.dispatchEvent(n),d&&i.startsWith("SMUI")){const r=new CustomEvent(i.replace(/^SMUI/g,()=>"MDC"),Object.assign(Object.assign({},o),{detail:s}));t==null||t.dispatchEvent(r),r.defaultPrevented&&n.preventDefault()}return n}export{e as d};
