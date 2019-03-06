const Icon = ({ ni = 'init-filled', config = {
  icon_size: '48px',
  icon_transition_time: '.2s',
  color_primary: 'black',
  color_secondary: 'silver',
  color_background: 'white',
} }) => {
  
  return (
    <div className={`neat-icon ni-${ni}`}>
      <div />
      <div />
      <div />
      <div />
      <style jsx>{`
        .neat-icon {
          --icon-size: ${config.icon_size};
          --icon-transition-time: ${config.icon_transition_time};
          --color-primary: ${config.color_primary};
          --color-secondary: ${config.color_secondary};
          --color-background: ${config.color_background};

          position: relative;
          width: var(--icon-size);
          height: var(--icon-size);
          margin: 0;
          padding: 0;
          background: transparent;
          border: none;
          outline: none;
          box-sizing: border-box;
          overflow: hidden;
          font-family: Inconsolata, monospace;
        }
        
        .neat-icon div,
        .neat-icon div::before,
        .neat-icon div::after {
          position: absolute;
          transition: all var(--icon-transition-time) ease-out;
          box-sizing: border-box;
        }
        
        .neat-icon.ni-init--filled div,
        .neat-icon.ni-init--outline div,
        .neat-icon.ni-init--duotone div {
          top: 50%;
          left: 50%;
          width: 12.5%;
          height: 12.5%;
          background: var(--color-primary);
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }
        
        /* @Name: alarm clock */
        /* @Category: date, time, clock, calendar */
        /* @Aliases: timer, watch, alarm, stopwatch, speedometer */
        
        
        /* Minute arrow */
        .neat-icon.ni-alarm-clock--filled div:nth-child(1),
        .neat-icon.ni-alarm-clock--outline div:nth-child(1),
        .neat-icon.ni-alarm-clock--duotone div:nth-child(1) {
          top: 55%;
          left: 50%;
          width: 28%;
          height: calc(var(--icon-size) / 16);;
          background: var(--color-primary);
          border: none;
          border-radius: 0;
          transform-origin: center left;
          transform: translateY(25%) rotate(-90deg);
          z-index: 2;
        }
        
        /* Empty dot */
        .neat-icon.ni-alarm-clock--filled div:nth-child(2),
        .neat-icon.ni-alarm-clock--outline div:nth-child(2),
        .neat-icon.ni-alarm-clock--duotone div:nth-child(2) {
          top: 50%;
          left: 50%;
          width: 12.5%;
          height: 12.5%;
          background: transparent;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }
        
        /* Circle body */
        .neat-icon.ni-alarm-clock--filled div:nth-child(3),
        .neat-icon.ni-alarm-clock--outline div:nth-child(3) {
          top: 50%;
          left: 50%;
          width: 75%;
          height: 75%;
          transform: translate(-50%, -45%);
          background: transparent;
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-radius: 50%;
          z-index: 1;
        }
        
        /* Left bell */
        .neat-icon.ni-alarm-clock--filled div:nth-child(3)::before,
        .neat-icon.ni-alarm-clock--outline div:nth-child(3)::before,
        .neat-icon.ni-alarm-clock--duotone div:nth-child(3)::before {
          content: '';
          top: calc(var(--icon-size) / -12);
          left: calc(var(--icon-size) / -12);
          width: 43.75%;
          height: calc(var(--icon-size) / 16);
          background: var(--color-primary);
          transform: rotate(-37deg);
        }
        
        /* Right bell */
        .neat-icon.ni-alarm-clock--filled div:nth-child(3)::after,
        .neat-icon.ni-alarm-clock--outline div:nth-child(3)::after,
        .neat-icon.ni-alarm-clock--duotone div:nth-child(3)::after {
          content: '';
          top: calc(var(--icon-size) / -12);
          right: calc(var(--icon-size) / -12);
          width: 43.75%;
          height: calc(var(--icon-size) / 16);
          background: var(--color-primary);
          transform: rotate(37deg);
        }
        
        /* Hour arrow */
        .neat-icon.ni-alarm-clock--filled div:nth-child(4),
        .neat-icon.ni-alarm-clock--outline div:nth-child(4),
        .neat-icon.ni-alarm-clock--duotone div:nth-child(4) {
          top: 55%;
          left: 50%;
          width: 21.5%;
          height: calc(var(--icon-size) / 16);;
          background: var(--color-primary);
          border: none;
          border-radius: 0;
          transform-origin: center left;
          transform: translateX(-7%) rotate(24deg);
          z-index: 2;
        }
        
        /* DUOTONE */
        
        .neat-icon.ni-alarm-clock--duotone div:nth-child(3) {
          top: 50%;
          left: 50%;
          width: 75%;
          height: 75%;
          transform: translate(-50%, -45%);
          background: var(--color-secondary);
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-radius: 50%;
          z-index: 1;
        }
        
        /* @Name: alarm clock add */
        /* @Category: date, time, clock, calendar */
        /* @Aliases: timer, watch, alarm, stopwatch, speedometer */
        
        /* Minute arrow */
        .neat-icon.ni-alarm-clock-add--filled div:nth-child(1),
        .neat-icon.ni-alarm-clock-add--outline div:nth-child(1),
        .neat-icon.ni-alarm-clock-add--duotone div:nth-child(1) {
          top: 50%;
          left: 50%;
          width: 31.25%;
          height: calc(var(--icon-size) / 16);;
          background: var(--color-primary);
          border: none;
          border-radius: 0;
          transform-origin: center center;
          transform: translateX(-50%) rotate(-90deg);
          z-index: 2;
        }
        
        /* Empty dot */
        .neat-icon.ni-alarm-clock-add--filled div:nth-child(2),
        .neat-icon.ni-alarm-clock-add--outline div:nth-child(2),
        .neat-icon.ni-alarm-clock-add--duotone div:nth-child(2) {
          top: 50%;
          left: 50%;
          width: 12.5%;
          height: 12.5%;
          background: transparent;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }
        
        /* Circle body */
        .neat-icon.ni-alarm-clock-add--filled div:nth-child(3),
        .neat-icon.ni-alarm-clock-add--outline div:nth-child(3) {
          top: 50%;
          left: 50%;
          width: 75%;
          height: 75%;
          transform: translate(-50%, -45%);
          background: transparent;
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-radius: 50%;
          z-index: 1;
        }
        
        /* Left bell */
        .neat-icon.ni-alarm-clock-add--filled div:nth-child(3)::before,
        .neat-icon.ni-alarm-clock-add--outline div:nth-child(3)::before,
        .neat-icon.ni-alarm-clock-add--duotone div:nth-child(3)::before {
          content: '';
          top: calc(var(--icon-size) / -12);
          left: calc(var(--icon-size) / -12);
          width: 43.75%;
          height: calc(var(--icon-size) / 16);
          background: var(--color-primary);
          transform: rotate(-37deg);
        }
        
        /* Right bell */
        .neat-icon.ni-alarm-clock-add--filled div:nth-child(3)::after,
        .neat-icon.ni-alarm-clock-add--outline div:nth-child(3)::after,
        .neat-icon.ni-alarm-clock-add--duotone div:nth-child(3)::after {
          content: '';
          top: calc(var(--icon-size) / -12);
          right: calc(var(--icon-size) / -12);
          width: 43.75%;
          height: calc(var(--icon-size) / 16);
          background: var(--color-primary);
          transform: rotate(37deg);
        }
        
        /* Hour arrow */
        .neat-icon.ni-alarm-clock-add--filled div:nth-child(4),
        .neat-icon.ni-alarm-clock-add--outline div:nth-child(4),
        .neat-icon.ni-alarm-clock-add--duotone div:nth-child(4) {
          top: 50%;
          left: 50%;
          width: 31.25%;
          height: calc(var(--icon-size) / 16);;
          background: var(--color-primary);
          border: none;
          border-radius: 0;
          transform: translateX(-50%);
          z-index: 2;
        }
        
        /* DUOTONE */
        
        .neat-icon.ni-alarm-clock-add--duotone div:nth-child(3) {
          top: 50%;
          left: 50%;
          width: 75%;
          height: 75%;
          transform: translate(-50%, -45%);
          background: var(--color-secondary);
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-radius: 50%;
          z-index: 1;
        }
        
        /* @Name: alarm clock off */
        /* @Category: date, time, clock, calendar */
        /* @Aliases: timer, watch, alarm, stopwatch, speedometer */
        
        
        /* Minute arrow */
        .neat-icon.ni-alarm-clock-off--filled div:nth-child(1),
        .neat-icon.ni-alarm-clock-off--outline div:nth-child(1),
        .neat-icon.ni-alarm-clock-off--duotone div:nth-child(1),
        .neat-icon.ni-alarm-clock-off--filled div:nth-child(4),
        .neat-icon.ni-alarm-clock-off--outline div:nth-child(4),
        .neat-icon.ni-alarm-clock-off--duotone div:nth-child(4) {
          top: 50%;
          left: 50%;
          width: 12.5%;
          height: 12.5%;
          background: transparent;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }
        
        /* Block line */
        .neat-icon.ni-alarm-clock-off--filled div:nth-child(2),
        .neat-icon.ni-alarm-clock-off--outline div:nth-child(2),
        .neat-icon.ni-alarm-clock-off--duotone div:nth-child(2) {
          top: 50%;
          left: 50%;
          width: 100%;
          height: calc(var(--icon-size) / 8);
          background: var(--color-primary);
          border-radius: 0;
          border-top: calc(var(--icon-size) / 16) solid white;
          transform: translate(-50%, -50%) rotate(45deg);
          z-index: 4;
        }
        
        /* Circle body */
        .neat-icon.ni-alarm-clock-off--filled div:nth-child(3),
        .neat-icon.ni-alarm-clock-off--outline div:nth-child(3),
        .neat-icon.ni-alarm-clock-off--duotone div:nth-child(3) {
          top: 50%;
          left: 50%;
          width: 75%;
          height: 75%;
          transform: translate(-50%, -45%);
          background: transparent;
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-radius: 50%;
          z-index: 1;
        }
        
        /* Left bell */
        .neat-icon.ni-alarm-clock-off--filled div:nth-child(3)::before,
        .neat-icon.ni-alarm-clock-off--outline div:nth-child(3)::before,
        .neat-icon.ni-alarm-clock-off--duotone div:nth-child(3)::before {
          content: '';
          top: calc(var(--icon-size) / -12);
          left: calc(var(--icon-size) / -12);
          width: 43.75%;
          height: calc(var(--icon-size) / 16);
          background: var(--color-primary);
          transform: rotate(-37deg);
        }
        
        /* Right bell */
        .neat-icon.ni-alarm-clock-off--filled div:nth-child(3)::after,
        .neat-icon.ni-alarm-clock-off--outline div:nth-child(3)::after,
        .neat-icon.ni-alarm-clock-off--duotone div:nth-child(3)::after {
          content: '';
          top: calc(var(--icon-size) / -12);
          right: calc(var(--icon-size) / -12);
          width: 43.75%;
          height: calc(var(--icon-size) / 16);
          background: var(--color-primary);
          transform: rotate(37deg);
        }
        
        /* @Name: alarm clock on */
        /* @Category: date, time, clock, calendar */
        /* @Aliases: timer, watch, alarm, stopwatch, speedometer */
        
        
        /* Minute arrow */
        .neat-icon.ni-alarm-clock-on--filled div:nth-child(1),
        .neat-icon.ni-alarm-clock-on--outline div:nth-child(1),
        .neat-icon.ni-alarm-clock-on--duotone div:nth-child(1) {
          top: 58.25%;
          left: 50%;
          width: 31.25%;
          height: calc(var(--icon-size) / 16);;
          background: var(--color-primary);
          border: none;
          border-radius: 0;
          transform-origin: bottom left;
          transform: rotate(-45deg);
          z-index: 2;
        }
        
        /* Empty dot */
        .neat-icon.ni-alarm-clock-on--filled div:nth-child(2),
        .neat-icon.ni-alarm-clock-on--outline div:nth-child(2),
        .neat-icon.ni-alarm-clock-on--duotone div:nth-child(2) {
          top: 50%;
          left: 50%;
          width: 12.5%;
          height: 12.5%;
          background: transparent;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }
        
        /* Circle body */
        .neat-icon.ni-alarm-clock-on--filled div:nth-child(3),
        .neat-icon.ni-alarm-clock-on--outline div:nth-child(3) {
          top: 50%;
          left: 50%;
          width: 75%;
          height: 75%;
          transform: translate(-50%, -45%);
          background: transparent;
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-radius: 50%;
          z-index: 1;
        }
        
        /* Left bell */
        .neat-icon.ni-alarm-clock-on--filled div:nth-child(3)::before,
        .neat-icon.ni-alarm-clock-on--outline div:nth-child(3)::before,
        .neat-icon.ni-alarm-clock-on--duotone div:nth-child(3)::before {
          content: '';
          top: calc(var(--icon-size) / -12);
          left: calc(var(--icon-size) / -12);
          width: 43.75%;
          height: calc(var(--icon-size) / 16);
          background: var(--color-primary);
          transform: rotate(-37deg);
        }
        
        /* Right bell */
        .neat-icon.ni-alarm-clock-on--filled div:nth-child(3)::after,
        .neat-icon.ni-alarm-clock-on--outline div:nth-child(3)::after,
        .neat-icon.ni-alarm-clock-on--duotone div:nth-child(3)::after {
          content: '';
          top: calc(var(--icon-size) / -12);
          right: calc(var(--icon-size) / -12);
          width: 43.75%;
          height: calc(var(--icon-size) / 16);
          background: var(--color-primary);
          transform: rotate(37deg);
        }
        
        /* Hour arrow */
        .neat-icon.ni-alarm-clock-on--filled div:nth-child(4),
        .neat-icon.ni-alarm-clock-on--outline div:nth-child(4),
        .neat-icon.ni-alarm-clock-on--duotone div:nth-child(4) {
          top: 58.25%;
          left: 50%;
          width: 21.5%;
          height: calc(var(--icon-size) / 16);;
          background: var(--color-primary);
          border: none;
          border-radius: 0;
          transform-origin: bottom left;
          transform: rotate(225deg);
          z-index: 2;
        }
        
        /* DUOTONE */
        
        .neat-icon.ni-alarm-clock-on--duotone div:nth-child(3) {
          top: 50%;
          left: 50%;
          width: 75%;
          height: 75%;
          transform: translate(-50%, -45%);
          background: var(--color-secondary);
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-radius: 50%;
          z-index: 1;
        }
        
        /* @Name: arrow down */
        /* @Category: arrows, navigation, direction */
        /* @Aliases: pointer, down, download, south */
        
        
        /* ALL */
        
        .neat-icon.ni-arrow-down--filled div:nth-child(1),
        .neat-icon.ni-arrow-down--outline div:nth-child(1),
        .neat-icon.ni-arrow-down--duotone div:nth-child(1),
        .neat-icon.ni-arrow-down--filled div:nth-child(4),
        .neat-icon.ni-arrow-down--outline div:nth-child(4),
        .neat-icon.ni-arrow-down--duotone div:nth-child(4) {
          top: 47.75%;
          left: 50%;
          width: 87.5%;
          height: 6.25%;
          transform: translate(-50%, -50%) rotate(90deg);
          background: var(--color-primary);
          border: none;
        }
        
        .neat-icon.ni-arrow-down--filled div:nth-child(2),
        .neat-icon.ni-arrow-down--outline div:nth-child(2),
        .neat-icon.ni-arrow-down--duotone div:nth-child(2) {
          top: 90.5%;
          left: 12.5%;
          width: 37.5%;
          height: 6.25%;
          transform-origin: bottom right;
          transform: rotate(45deg);
          background: var(--color-primary);
          border: none;
        }
        
        .neat-icon.ni-arrow-down--filled div:nth-child(3),
        .neat-icon.ni-arrow-down--outline div:nth-child(3),
        .neat-icon.ni-arrow-down--duotone div:nth-child(3) {
          top: 90.5%;
          left: 50%;
          width: 37.5%;
          height: 6.25%;
          transform-origin: bottom left;
          transform: rotate(-45deg);
          background: var(--color-primary);
          border: none;
        }
        
        /* @Name: arrow left */
        /* @Category: arrows, navigation, direction */
        /* @Aliases: pointer, left, back, previous, west */
        
        
        /* ALL */
        
        .neat-icon.ni-arrow-left--filled div:nth-child(1),
        .neat-icon.ni-arrow-left--outline div:nth-child(1),
        .neat-icon.ni-arrow-left--duotone div:nth-child(1),
        .neat-icon.ni-arrow-left--filled div:nth-child(4),
        .neat-icon.ni-arrow-left--outline div:nth-child(4),
        .neat-icon.ni-arrow-left--duotone div:nth-child(4) {
          top: 50%;
          left: 6.25%;
          width: 87.5%;
          height: 6.25%;
          transform: translateY(-50%);
          background: var(--color-primary);
          border: none;
        }
        
        .neat-icon.ni-arrow-left--filled div:nth-child(2),
        .neat-icon.ni-arrow-left--outline div:nth-child(2),
        .neat-icon.ni-arrow-left--duotone div:nth-child(2) {
          top: 50%;
          left: 6.25%;
          width: 37.5%;
          height: 6.25%;
          transform-origin: bottom left;
          transform: translateY(-30%) rotate(-45deg);
          background: var(--color-primary);
          border: none;
        }
        
        .neat-icon.ni-arrow-left--filled div:nth-child(3),
        .neat-icon.ni-arrow-left--outline div:nth-child(3),
        .neat-icon.ni-arrow-left--duotone div:nth-child(3) {
          top: 50%;
          left: 6.25%;
          width: 37.5%;
          height: 6.25%;
          transform-origin: top left;
          transform: translateY(-70%) rotate(45deg);
          background: var(--color-primary);
          border: none;
        }
        
        /* @Name: arrow right */
        /* @Category: arrows, navigation, direction */
        /* @Aliases: pointer, right, next, forward, east */
        
        
        /* ALL */
        
        .neat-icon.ni-arrow-right--filled div:nth-child(1),
        .neat-icon.ni-arrow-right--outline div:nth-child(1),
        .neat-icon.ni-arrow-right--duotone div:nth-child(1),
        .neat-icon.ni-arrow-right--filled div:nth-child(4),
        .neat-icon.ni-arrow-right--outline div:nth-child(4),
        .neat-icon.ni-arrow-right--duotone div:nth-child(4) {
          top: 50%;
          left: 6.25%;
          width: 87.5%;
          height: 6.25%;
          transform: translateY(-50%) rotate(180deg);
          background: var(--color-primary);
          border: none;
        }
        
        .neat-icon.ni-arrow-right--filled div:nth-child(2),
        .neat-icon.ni-arrow-right--outline div:nth-child(2),
        .neat-icon.ni-arrow-right--duotone div:nth-child(2) {
          top: 50%;
          left: 56.25%;
          width: 37.5%;
          height: 6.25%;
          transform-origin: bottom right;
          transform: translateY(-30%) rotate(45deg);
          background: var(--color-primary);
          border: none;
        }
        
        .neat-icon.ni-arrow-right--filled div:nth-child(3),
        .neat-icon.ni-arrow-right--outline div:nth-child(3),
        .neat-icon.ni-arrow-right--duotone div:nth-child(3) {
          top: 50%;
          left: 56.25%;
          width: 37.5%;
          height: 6.25%;
          transform-origin: top right;
          transform: translateY(-70%) rotate(-45deg);
          background: var(--color-primary);
          border: none;
        }
        
        /* @Name: arrow square down */
        /* @Category: arrows, navigation, direction */
        /* @Aliases: pointer, down, download, south */
        
        
        /* ALL */
        
        .neat-icon.ni-arrow-square-down--filled div:nth-child(1),
        .neat-icon.ni-arrow-square-down--outline div:nth-child(1),
        .neat-icon.ni-arrow-square-down--duotone div:nth-child(1),
        .neat-icon.ni-arrow-square-down--filled div:nth-child(4),
        .neat-icon.ni-arrow-square-down--outline div:nth-child(4),
        .neat-icon.ni-arrow-square-down--duotone div:nth-child(4) {
          top: 47.75%;
          left: 50%;
          width: 56.25%;
          height: 6.25%;
          transform: translate(-50%, -50%) rotate(90deg);
          background: var(--color-primary);
          border: none;
        }
        
        .neat-icon.ni-arrow-square-down--filled div:nth-child(2),
        .neat-icon.ni-arrow-square-down--outline div:nth-child(2),
        .neat-icon.ni-arrow-square-down--duotone div:nth-child(2) {
          top: 76.25%;
          left: 0;
          width: 50%;
          height: 6.25%;
          transform-origin: bottom right;
          transform: rotate(45deg);
          background: var(--color-primary);
          border: none;
        }
        
        .neat-icon.ni-arrow-square-down--filled div:nth-child(3),
        .neat-icon.ni-arrow-square-down--outline div:nth-child(3),
        .neat-icon.ni-arrow-square-down--duotone div:nth-child(3) {
          top: 76.25%;
          left: 50%;
          width: 50%;
          height: 6.25%;
          transform-origin: bottom left;
          transform: rotate(-45deg);
          background: var(--color-primary);
          border: none;
        }
        
        /* @Name: arrow square left */
        /* @Category: arrows, navigation, direction */
        /* @Aliases: pointer, left, back, previous, west */
        
        
        /* ALL */
        
        .neat-icon.ni-arrow-square-left--filled div:nth-child(1),
        .neat-icon.ni-arrow-square-left--outline div:nth-child(1),
        .neat-icon.ni-arrow-square-left--duotone div:nth-child(1),
        .neat-icon.ni-arrow-square-left--filled div:nth-child(4),
        .neat-icon.ni-arrow-square-left--outline div:nth-child(4),
        .neat-icon.ni-arrow-square-left--duotone div:nth-child(4) {
          top: 50%;
          left: 18.75%;
          width: 56.25%;
          height: 6.25%;
          transform: translateY(-50%);
          background: var(--color-primary);
          border: none;
        }
        
        .neat-icon.ni-arrow-square-left--filled div:nth-child(2),
        .neat-icon.ni-arrow-square-left--outline div:nth-child(2),
        .neat-icon.ni-arrow-square-left--duotone div:nth-child(2) {
          top: 50%;
          left: 18.75%;
          width: 50%;
          height: 6.25%;
          transform-origin: bottom left;
          transform: translateY(-30%) rotate(-45deg);
          background: var(--color-primary);
          border: none;
        }
        
        .neat-icon.ni-arrow-square-left--filled div:nth-child(3),
        .neat-icon.ni-arrow-square-left--outline div:nth-child(3),
        .neat-icon.ni-arrow-square-left--duotone div:nth-child(3) {
          top: 50%;
          left: 18.75%;
          width: 50%;
          height: 6.25%;
          transform-origin: top left;
          transform: translateY(-70%) rotate(45deg);
          background: var(--color-primary);
          border: none;
        }
        
        /* @Name: arrow square right */
        /* @Category: arrows, navigation, direction */
        /* @Aliases: pointer, right, next, forward, east, forward */
        
        /* ALL */
        
        .neat-icon.ni-arrow-square-right--filled div:nth-child(1),
        .neat-icon.ni-arrow-square-right--outline div:nth-child(1),
        .neat-icon.ni-arrow-square-right--duotone div:nth-child(1),
        .neat-icon.ni-arrow-square-right--filled div:nth-child(4),
        .neat-icon.ni-arrow-square-right--outline div:nth-child(4),
        .neat-icon.ni-arrow-square-right--duotone div:nth-child(4) {
          top: 50%;
          left: 50%;
          width: 56.25%;
          height: 6.25%;
          transform: translate(-50%, -50%) rotate(180deg);
          background: var(--color-primary);
          border: none;
        }
        
        .neat-icon.ni-arrow-square-right--filled div:nth-child(2),
        .neat-icon.ni-arrow-square-right--outline div:nth-child(2),
        .neat-icon.ni-arrow-square-right--duotone div:nth-child(2) {
          top: 50%;
          left: 31.25%;
          width: 50%;
          height: 6.25%;
          transform-origin: bottom right;
          transform: translateY(-30%) rotate(45deg);
          background: var(--color-primary);
          border: none;
        }
        
        .neat-icon.ni-arrow-square-right--filled div:nth-child(3),
        .neat-icon.ni-arrow-square-right--outline div:nth-child(3),
        .neat-icon.ni-arrow-square-right--duotone div:nth-child(3) {
          top: 50%;
          left: 31.25%;
          width: 50%;
          height: 6.25%;
          transform-origin: top right;
          transform: translateY(-70%) rotate(-45deg);
          background: var(--color-primary);
          border: none;
        }
        
        /* @Name: arrow square up */
        /* @Category: arrows, navigation, direction */
        /* @Aliases: pointer, up, upload, north */
        
        
        /* ALL */
        
        .neat-icon.ni-arrow-square-up--filled div:nth-child(1),
        .neat-icon.ni-arrow-square-up--outline div:nth-child(1),
        .neat-icon.ni-arrow-square-up--duotone div:nth-child(1),
        .neat-icon.ni-arrow-square-up--filled div:nth-child(4),
        .neat-icon.ni-arrow-square-up--outline div:nth-child(4),
        .neat-icon.ni-arrow-square-up--duotone div:nth-child(4) {
          top: 52.25%;
          left: 50%;
          width: 56.25%;
          height: 6.25%;
          transform: translate(-50%, -50%) rotate(-90deg);
          background: var(--color-primary);
          border: none;
        }
        
        .neat-icon.ni-arrow-square-up--filled div:nth-child(2),
        .neat-icon.ni-arrow-square-up--outline div:nth-child(2),
        .neat-icon.ni-arrow-square-up--duotone div:nth-child(2) {
          top: 18.75%;
          left: 0;
          width: 50%;
          height: 6.25%;
          transform-origin: top right;
          transform: rotate(-45deg);
          background: var(--color-primary);
          border: none;
        }
        
        .neat-icon.ni-arrow-square-up--filled div:nth-child(3),
        .neat-icon.ni-arrow-square-up--outline div:nth-child(3),
        .neat-icon.ni-arrow-square-up--duotone div:nth-child(3) {
          top: 18.75%;
          left: 50%;
          width: 50%;
          height: 6.25%;
          transform-origin: top left;
          transform: rotate(45deg);
          background: var(--color-primary);
          border: none;
        }
        
        /* @Name: arrow right */
        /* @Category: arrows, navigation, direction */
        /* @Aliases: pointer, right, next, forward, east */
        
        
        /* ALL */
        
        .neat-icon.ni-arrow-up--filled div:nth-child(1),
        .neat-icon.ni-arrow-up--outline div:nth-child(1),
        .neat-icon.ni-arrow-up--duotone div:nth-child(1),
        .neat-icon.ni-arrow-up--filled div:nth-child(4),
        .neat-icon.ni-arrow-up--outline div:nth-child(4),
        .neat-icon.ni-arrow-up--duotone div:nth-child(4) {
          top: 52.25%;
          left: 50%;
          width: 87.5%;
          height: 6.25%;
          transform: translate(-50%, -50%) rotate(-90deg);
          background: var(--color-primary);
          border: none;
        }
        
        .neat-icon.ni-arrow-up--filled div:nth-child(2),
        .neat-icon.ni-arrow-up--outline div:nth-child(2),
        .neat-icon.ni-arrow-up--duotone div:nth-child(2) {
          top: 3.25%;
          left: 12.5%;
          width: 37.5%;
          height: 6.25%;
          transform-origin: top right;
          transform: rotate(-45deg);
          background: var(--color-primary);
          border: none;
        }
        
        .neat-icon.ni-arrow-up--filled div:nth-child(3),
        .neat-icon.ni-arrow-up--outline div:nth-child(3),
        .neat-icon.ni-arrow-up--duotone div:nth-child(3) {
          top: 3.25%;
          left: 50%;
          width: 37.5%;
          height: 6.25%;
          transform-origin: top left;
          transform: rotate(45deg);
          background: var(--color-primary);
          border: none;
        }
        
        /* @Name: bookmark */
        /* @Category: tools, shapes, interface */
        /* @Aliases: flag, clip, save, book, sticker, tag */
        
        
        /* FILLED */
        
        .neat-icon.ni-bookmark--filled div:nth-child(1),
        .neat-icon.ni-bookmark--outline div:nth-child(1),
        .neat-icon.ni-bookmark--duotone div:nth-child(1) {
          top: 56.25%;
          left: 25%;
          width: 25%;
          height: calc(var(--icon-size) / 16);
          transform: rotate(90deg) skew(45deg);
          background: var(--color-primary);
          border: none;
          transform-origin: bottom left;
          z-index: 3;
        }
        
        .neat-icon.ni-bookmark--filled div:nth-child(1)::after,
        .neat-icon.ni-bookmark--outline div:nth-child(1)::after,
        .neat-icon.ni-bookmark--duotone div:nth-child(1)::after {
          content: '';
          top: 85%;
          left: 0;
          width: 97%;
          height: calc(var(--icon-size) / 11);
          background: var(--color-primary);
          border: none;
          transform-origin: top right;
          transform: rotateZ(95deg);
        }
        
        .neat-icon.ni-bookmark--filled div:nth-child(2),
        .neat-icon.ni-bookmark--outline div:nth-child(2),
        .neat-icon.ni-bookmark--duotone div:nth-child(2) {
          top: 50%;
          left: 50%;
          width: 12.5%;
          height: 12.5%;
          background: transparent;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }
        
        .neat-icon.ni-bookmark--filled div:nth-child(3) {
          top: 50%;
          left: 50%;
          width: 50%;
          height: 50%;
          transform: translate(-50%, -75%);
          background: var(--color-primary);
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-bottom-width: 0;
          border-top-left-radius: calc(var(--icon-size) / 16);
          border-top-right-radius: calc(var(--icon-size) / 16);
        }
        
        .neat-icon.ni-bookmark--filled div:nth-child(3)::before {
          content: '';
          top: 100%;
          left: 0;
          width: 0;
          height: 0;
          background: transparent;
          border-top: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-bottom: calc(var(--icon-size) / 16) solid transparent;
          border-left: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-right: calc(var(--icon-size) / 16) solid transparent;
        }
        
        .neat-icon.ni-bookmark--filled div:nth-child(3)::after {
          content: '';
          top: 100%;
          left: 68.75%;
          width: 0;
          height: 0;
          background: transparent;
          border-top: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-bottom: calc(var(--icon-size) / 16) solid transparent;
          border-left: calc(var(--icon-size) / 16) solid transparent;
          border-right: calc(var(--icon-size) / 16) solid var(--color-primary);
        }
        
        .neat-icon.ni-bookmark--filled div:nth-child(4),
        .neat-icon.ni-bookmark--outline div:nth-child(4),
        .neat-icon.ni-bookmark--duotone div:nth-child(4) {
          top: 50%;
          left: 68.75%;
          width: 25%;
          height: calc(var(--icon-size) / 16);
          transform: rotate(90deg) skew(-45deg);
          background: var(--color-primary);
          border: none;
          transform-origin: bottom left;
          z-index: 3;
        }
        
        .neat-icon.ni-bookmark--filled div:nth-child(4)::after,
        .neat-icon.ni-bookmark--outline div:nth-child(4)::after,
        .neat-icon.ni-bookmark--duotone div:nth-child(4)::after {
          content: '';
          top: -40%;
          left: -15%;
          width: 97%;
          height: calc(var(--icon-size) / 11);
          background: var(--color-primary);
          border: none;
          transform-origin: center right;
          transform: rotateZ(-95deg);
        }
        
        /* OUTLINE */
        
        .neat-icon.ni-bookmark--outline div:nth-child(3) {
          top: 50%;
          left: 50%;
          width: 50%;
          height: 50%;
          transform: translate(-50%, -75%);
          background: transparent;
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-bottom-width: 0;
          border-top-left-radius: calc(var(--icon-size) / 16);
          border-top-right-radius: calc(var(--icon-size) / 16);
        }
        
        .neat-icon.ni-bookmark--outline div:nth-child(3)::before {
          content: '';
          top: 100%;
          left: 0;
          width: 0;
          height: 0;
          background: transparent;
          border-top: calc(var(--icon-size) / 16) solid transparent;
          border-bottom: calc(var(--icon-size) / 16) solid transparent;
          border-left: calc(var(--icon-size) / 16) solid transparent;
          border-right: calc(var(--icon-size) / 16) solid transparent;
        }
        
        .neat-icon.ni-bookmark--outline div:nth-child(3)::after {
          content: '';
          top: 100%;
          left: 68.75%;
          width: 0;
          height: 0;
          background: transparent;
          border-top: calc(var(--icon-size) / 16) solid transparent;
          border-bottom: calc(var(--icon-size) / 16) solid transparent;
          border-left: calc(var(--icon-size) / 16) solid transparent;
          border-right: calc(var(--icon-size) / 16) solid transparent;
        }
        
        /* DUOTONE */
        
        .neat-icon.ni-bookmark--duotone div:nth-child(3) {
          top: 50%;
          left: 50%;
          width: 50%;
          height: 50%;
          transform: translate(-50%, -75%);
          background: var(--color-secondary);
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-bottom-width: 0;
          border-top-left-radius: calc(var(--icon-size) / 16);
          border-top-right-radius: calc(var(--icon-size) / 16);
        }
        
        .neat-icon.ni-bookmark--duotone div:nth-child(3)::before {
          content: '';
          top: 100%;
          left: 0;
          width: 0;
          height: 0;
          background: transparent;
          border-top: calc(var(--icon-size) / 16) solid var(--color-secondary);
          border-bottom: calc(var(--icon-size) / 16) solid transparent;
          border-left: calc(var(--icon-size) / 16) solid var(--color-secondary);
          border-right: calc(var(--icon-size) / 16) solid transparent;
        }
        
        .neat-icon.ni-bookmark--duotone div:nth-child(3)::after {
          content: '';
          top: 100%;
          left: 68.75%;
          width: 0;
          height: 0;
          background: transparent;
          border-top: calc(var(--icon-size) / 16) solid var(--color-secondary);
          border-bottom: calc(var(--icon-size) / 16) solid transparent;
          border-left: calc(var(--icon-size) / 16) solid transparent;
          border-right: calc(var(--icon-size) / 16) solid var(--color-secondary);
        }
        
        /* @Name: burger */
        /* @Category: navigation, interface */
        /* @Aliases: navigation, menu, three, lines, nav, drawer */
        
        
        .neat-icon.ni-burger--filled div:nth-child(1),
        .neat-icon.ni-burger--outline div:nth-child(1),
        .neat-icon.ni-burger--duotone div:nth-child(1) {
          top: 25%;
          left: 50%;
          width: 87.5%;
          height: 6.25%;
          transform: translate(-50%, -50%);
          background: var(--color-primary);
          border: none;
          box-shadow: 0 calc(var(--icon-size) / 64) 0 var(--color-primary), 0 calc(var(--icon-size) / -64) 0 var(--color-primary);
        }
        
        .neat-icon.ni-burger--filled div:nth-child(2),
        .neat-icon.ni-burger--outline div:nth-child(2),
        .neat-icon.ni-burger--duotone div:nth-child(2),
        .neat-icon.ni-burger--filled div:nth-child(3),
        .neat-icon.ni-burger--outline div:nth-child(3),
        .neat-icon.ni-burger--duotone div:nth-child(3) {
          top: 50%;
          left: 50%;
          width: 87.5%;
          height: 6.25%;
          transform: translate(-50%, -50%);
          background: var(--color-primary);
          border: none;
          box-shadow: 0 calc(var(--icon-size) / 64) 0 var(--color-primary), 0 calc(var(--icon-size) / -64) 0 var(--color-primary);
        }
        
        .neat-icon.ni-burger--filled div:nth-child(4),
        .neat-icon.ni-burger--outline div:nth-child(4),
        .neat-icon.ni-burger--duotone div:nth-child(4) {
          top: 75%;
          left: 50%;
          width: 87.5%;
          height: 6.25%;
          transform: translate(-50%, -50%);
          background: var(--color-primary);
          border: none;
          box-shadow: 0 calc(var(--icon-size) / 64) 0 var(--color-primary), 0 calc(var(--icon-size) / -64) 0 var(--color-primary);
        }
        
        /* @Name: caret down */
        /* @Category: arrows, navigation, direction */
        /* @Aliases: pointer, down, more, arrowhead, arrow */
        
        
        /* ALL */
        
        .neat-icon.ni-caret-down--filled div:nth-child(1),
        .neat-icon.ni-caret-down--outline div:nth-child(1),
        .neat-icon.ni-caret-down--duotone div:nth-child(1),
        .neat-icon.ni-caret-down--filled div:nth-child(2),
        .neat-icon.ni-caret-down--outline div:nth-child(2),
        .neat-icon.ni-caret-down--duotone div:nth-child(2),
        .neat-icon.ni-caret-down--filled div:nth-child(4),
        .neat-icon.ni-caret-down--outline div:nth-child(4),
        .neat-icon.ni-caret-down--duotone div:nth-child(4) {
          top: 50%;
          left: 50%;
          width: 12.5%;
          height: 12.5%;
          background: transparent;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }
        
        .neat-icon.ni-caret-down--filled div:nth-child(3),
        .neat-icon.ni-caret-down--outline div:nth-child(3),
        .neat-icon.ni-caret-down--duotone div:nth-child(3) {
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: transparent;
          border: none;
          z-index: 2;
        }
        
        .neat-icon.ni-caret-down--filled div:nth-child(3)::after,
        .neat-icon.ni-caret-down--outline div:nth-child(3)::after,
        .neat-icon.ni-caret-down--duotone div:nth-child(3)::after {
          content: '${String.fromCodePoint(0x25B8)}';
          top: 50%;
          left: 50%;
          color: var(--color-primary);
          font-size: calc(var(--icon-size) / 1.25);
          line-height: calc(var(--icon-size) / 1.25);
          transform: translate(-50%, -50%) rotate(90deg);
        }
        
        /* @Name: caret left */
        /* @Category: arrows, navigation, direction */
        /* @Aliases: pointer, left, previous, arrowhead, arrow */
        
        
        /* ALL */
        
        .neat-icon.ni-caret-left--filled div:nth-child(1),
        .neat-icon.ni-caret-left--outline div:nth-child(1),
        .neat-icon.ni-caret-left--duotone div:nth-child(1),
        .neat-icon.ni-caret-left--filled div:nth-child(2),
        .neat-icon.ni-caret-left--outline div:nth-child(2),
        .neat-icon.ni-caret-left--duotone div:nth-child(2),
        .neat-icon.ni-caret-left--filled div:nth-child(4),
        .neat-icon.ni-caret-left--outline div:nth-child(4),
        .neat-icon.ni-caret-left--duotone div:nth-child(4) {
          top: 50%;
          left: 50%;
          width: 12.5%;
          height: 12.5%;
          background: transparent;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }
        
        .neat-icon.ni-caret-left--filled div:nth-child(3),
        .neat-icon.ni-caret-left--outline div:nth-child(3),
        .neat-icon.ni-caret-left--duotone div:nth-child(3) {
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: transparent;
          border: none;
          z-index: 2;
        }
        
        .neat-icon.ni-caret-left--filled div:nth-child(3)::after,
        .neat-icon.ni-caret-left--outline div:nth-child(3)::after,
        .neat-icon.ni-caret-left--duotone div:nth-child(3)::after {
          content: '${String.fromCodePoint(0x25b8)}';
          top: 50%;
          left: 50%;
          color: var(--color-primary);
          font-size: calc(var(--icon-size) / 1.25);
          line-height: calc(var(--icon-size) / 1.25);
          transform: translate(-50%, -50%) rotate(-180deg);
        }
        
        /* @Name: caret right */
        /* @Category: arrows, navigation, direction */
        /* @Aliases: pointer, right, next, arrowhead, arrow, forward, play */
        
        
        /* ALL */
        
        .neat-icon.ni-caret-right--filled div:nth-child(1),
        .neat-icon.ni-caret-right--outline div:nth-child(1),
        .neat-icon.ni-caret-right--duotone div:nth-child(1),
        .neat-icon.ni-caret-right--filled div:nth-child(2),
        .neat-icon.ni-caret-right--outline div:nth-child(2),
        .neat-icon.ni-caret-right--duotone div:nth-child(2),
        .neat-icon.ni-caret-right--filled div:nth-child(4),
        .neat-icon.ni-caret-right--outline div:nth-child(4),
        .neat-icon.ni-caret-right--duotone div:nth-child(4) {
          top: 50%;
          left: 50%;
          width: 12.5%;
          height: 12.5%;
          background: transparent;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }
        
        .neat-icon.ni-caret-right--filled div:nth-child(3),
        .neat-icon.ni-caret-right--outline div:nth-child(3),
        .neat-icon.ni-caret-right--duotone div:nth-child(3) {
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: transparent;
          border: none;
          z-index: 2;
        }
        
        .neat-icon.ni-caret-right--filled div:nth-child(3)::after,
        .neat-icon.ni-caret-right--outline div:nth-child(3)::after,
        .neat-icon.ni-caret-right--duotone div:nth-child(3)::after {
          content: '${String.fromCodePoint(0x25b8)}';
          top: 50%;
          left: 50%;
          color: var(--color-primary);
          font-size: calc(var(--icon-size) / 1.25);
          line-height: calc(var(--icon-size) / 1.25);
          transform: translate(-50%, -50%);
        }
        
        /* @Name: caret up */
        /* @Category: arrows, navigation, direction */
        /* @Aliases: pointer, up, less, arrowhead, arrow */
        
        
        /* ALL */
        
        .neat-icon.ni-caret-up--filled div:nth-child(1),
        .neat-icon.ni-caret-up--outline div:nth-child(1),
        .neat-icon.ni-caret-up--duotone div:nth-child(1),
        .neat-icon.ni-caret-up--filled div:nth-child(2),
        .neat-icon.ni-caret-up--outline div:nth-child(2),
        .neat-icon.ni-caret-up--duotone div:nth-child(2),
        .neat-icon.ni-caret-up--filled div:nth-child(4),
        .neat-icon.ni-caret-up--outline div:nth-child(4),
        .neat-icon.ni-caret-up--duotone div:nth-child(4) {
          top: 50%;
          left: 50%;
          width: 12.5%;
          height: 12.5%;
          background: transparent;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }
        
        .neat-icon.ni-caret-up--filled div:nth-child(3),
        .neat-icon.ni-caret-up--outline div:nth-child(3),
        .neat-icon.ni-caret-up--duotone div:nth-child(3) {
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: transparent;
          border: none;
          z-index: 2;
        }
        
        .neat-icon.ni-caret-up--filled div:nth-child(3)::after,
        .neat-icon.ni-caret-up--outline div:nth-child(3)::after,
        .neat-icon.ni-caret-up--duotone div:nth-child(3)::after {
          content: '${String.fromCodePoint(0x25b8)}';
          top: 50%;
          left: 50%;
          color: var(--color-primary);
          font-size: calc(var(--icon-size) / 1.25);
          line-height: calc(var(--icon-size) / 1.25);
          transform: translate(-50%, -50%) rotate(-90deg);
        }
        
        /* @Name: chevron down */
        /* @Category: arrows, navigation, direction */
        /* @Aliases: pointer, down, more, arrowhead, arrow */
        
        
        /* ALL */
        
        .neat-icon.ni-chevron-down--filled div:nth-child(1),
        .neat-icon.ni-chevron-down--outline div:nth-child(1),
        .neat-icon.ni-chevron-down--duotone div:nth-child(1),
        .neat-icon.ni-chevron-down--filled div:nth-child(4),
        .neat-icon.ni-chevron-down--outline div:nth-child(4),
        .neat-icon.ni-chevron-down--duotone div:nth-child(4) {
          top: 50%;
          left: 50%;
          width: 12.5%;
          height: 12.5%;
          background: transparent;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }
        
        .neat-icon.ni-chevron-down--filled div:nth-child(2),
        .neat-icon.ni-chevron-down--outline div:nth-child(2),
        .neat-icon.ni-chevron-down--duotone div:nth-child(2) {
          top: 68.75%;
          left: 0;
          width: 50%;
          height: 6.25%;
          transform-origin: bottom right;
          transform: rotate(45deg);
          background: var(--color-primary);
          border: none;
        }
        
        .neat-icon.ni-chevron-down--filled div:nth-child(3),
        .neat-icon.ni-chevron-down--outline div:nth-child(3),
        .neat-icon.ni-chevron-down--duotone div:nth-child(3) {
          top: 68.75%;
          left: 50%;
          width: 50%;
          height: 6.25%;
          transform-origin: bottom left;
          transform: rotate(-45deg);
          background: var(--color-primary);
          border: none;
        }
        
        /* @Name: chevron left */
        /* @Category: arrows, navigation, direction */
        /* @Aliases: pointer, left, previous, arrowhead, arrow */
        
        
        /* ALL */
        
        .neat-icon.ni-chevron-left--filled div:nth-child(1),
        .neat-icon.ni-chevron-left--outline div:nth-child(1),
        .neat-icon.ni-chevron-left--duotone div:nth-child(1),
        .neat-icon.ni-chevron-left--filled div:nth-child(4),
        .neat-icon.ni-chevron-left--outline div:nth-child(4),
        .neat-icon.ni-chevron-left--duotone div:nth-child(4) {
          top: 50%;
          left: 50%;
          width: 12.5%;
          height: 12.5%;
          background: transparent;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }
        
        .neat-icon.ni-chevron-left--filled div:nth-child(2),
        .neat-icon.ni-chevron-left--outline div:nth-child(2),
        .neat-icon.ni-chevron-left--duotone div:nth-child(2) {
          top: 50%;
          left: 25%;
          width: 50%;
          height: 6.25%;
          transform-origin: bottom left;
          transform: translateY(-30%) rotate(-45deg);
          background: var(--color-primary);
          border: none;
        }
        
        .neat-icon.ni-chevron-left--filled div:nth-child(3),
        .neat-icon.ni-chevron-left--outline div:nth-child(3),
        .neat-icon.ni-chevron-left--duotone div:nth-child(3) {
          top: 50%;
          left: 25%;
          width: 50%;
          height: 6.25%;
          transform-origin: top left;
          transform: translateY(-70%) rotate(45deg);
          background: var(--color-primary);
          border: none;
        }
        
        /* @Name: chevron right */
        /* @Category: arrows, navigation, direction */
        /* @Aliases: pointer, right, next, arrowhead, arrow, forward */
        
        
        /* ALL */
        
        .neat-icon.ni-chevron-right--filled div:nth-child(1),
        .neat-icon.ni-chevron-right--outline div:nth-child(1),
        .neat-icon.ni-chevron-right--duotone div:nth-child(1),
        .neat-icon.ni-chevron-right--filled div:nth-child(4),
        .neat-icon.ni-chevron-right--outline div:nth-child(4),
        .neat-icon.ni-chevron-right--duotone div:nth-child(4) {
          top: 50%;
          left: 50%;
          width: 12.5%;
          height: 12.5%;
          background: transparent;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }
        
        .neat-icon.ni-chevron-right--filled div:nth-child(2),
        .neat-icon.ni-chevron-right--outline div:nth-child(2),
        .neat-icon.ni-chevron-right--duotone div:nth-child(2) {
          top: 50%;
          left: 25%;
          width: 50%;
          height: 6.25%;
          transform-origin: bottom right;
          transform: translateY(-30%) rotate(45deg);
          background: var(--color-primary);
          border: none;
        }
        
        .neat-icon.ni-chevron-right--filled div:nth-child(3),
        .neat-icon.ni-chevron-right--outline div:nth-child(3),
        .neat-icon.ni-chevron-right--duotone div:nth-child(3) {
          top: 50%;
          left: 25%;
          width: 50%;
          height: 6.25%;
          transform-origin: top right;
          transform: translateY(-70%) rotate(-45deg);
          background: var(--color-primary);
          border: none;
        }
        
        /* @Name: caret up */
        /* @Category: arrows, navigation, direction */
        /* @Aliases: pointer, up, less, arrowhead, arrow */
        
        
        /* ALL */
        
        .neat-icon.ni-chevron-up--filled div:nth-child(1),
        .neat-icon.ni-chevron-up--outline div:nth-child(1),
        .neat-icon.ni-chevron-up--duotone div:nth-child(1),
        .neat-icon.ni-chevron-up--filled div:nth-child(4),
        .neat-icon.ni-chevron-up--outline div:nth-child(4),
        .neat-icon.ni-chevron-up--duotone div:nth-child(4) {
          top: 50%;
          left: 50%;
          width: 12.5%;
          height: 12.5%;
          background: transparent;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }
        
        .neat-icon.ni-chevron-up--filled div:nth-child(2),
        .neat-icon.ni-chevron-up--outline div:nth-child(2),
        .neat-icon.ni-chevron-up--duotone div:nth-child(2) {
          top: 25%;
          left: 0;
          width: 50%;
          height: 6.25%;
          transform-origin: top right;
          transform: rotate(-45deg);
          background: var(--color-primary);
          border: none;
        }
        
        .neat-icon.ni-chevron-up--filled div:nth-child(3),
        .neat-icon.ni-chevron-up--outline div:nth-child(3),
        .neat-icon.ni-chevron-up--duotone div:nth-child(3) {
          top: 25%;
          left: 50%;
          width: 50%;
          height: 6.25%;
          transform-origin: top left;
          transform: rotate(45deg);
          background: var(--color-primary);
          border: none;
        }
        
        /* @Name: close */
        /* @Category: tools, navigation, interface */
        /* @Aliases: close, blocked, exit, out */
        
        
        /* ALL */
        
        .neat-icon.ni-close--filled div:nth-child(1),
        .neat-icon.ni-close--outline div:nth-child(1),
        .neat-icon.ni-close--duotone div:nth-child(1),
        .neat-icon.ni-close--filled div:nth-child(4),
        .neat-icon.ni-close--outline div:nth-child(4),
        .neat-icon.ni-close--duotone div:nth-child(4) {
          top: 50%;
          left: 50%;
          width: 12.5%;
          height: 12.5%;
          background: transparent;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }
        
        .neat-icon.ni-close--filled div:nth-child(2),
        .neat-icon.ni-close--outline div:nth-child(2),
        .neat-icon.ni-close--duotone div:nth-child(2) {
          top: 50%;
          left: 50%;
          width: 100%;
          height: 6.25%;
          transform: translate(-50%, -50%) rotate(45deg);
          background: var(--color-primary);
          border: none;
        }
        
        .neat-icon.ni-close--filled div:nth-child(3),
        .neat-icon.ni-close--outline div:nth-child(3),
        .neat-icon.ni-close--duotone div:nth-child(3) {
          top: 50%;
          left: 50%;
          width: 100%;
          height: 6.25%;
          transform: translate(-50%, -50%) rotate(-45deg);
          background: var(--color-primary);
          border: none;
        }
        
        /* @Name: close circle */
        /* @Category: tools, navigation, interface, circle */
        /* @Aliases: close, blocked, exit, out */
        
        
        /* FILLED */
        
        .neat-icon.ni-close-circle--filled div:nth-child(1) {
          top: 50%;
          left: 50%;
          width: 62.5%;
          height: 6.25%;
          transform: translate(-50%, -50%) rotate(45deg);
          background: white;
          border: none;
          z-index: 2;
        }
        
        .neat-icon.ni-close-circle--filled div:nth-child(2),
        .neat-icon.ni-close-circle--outline div:nth-child(2),
        .neat-icon.ni-close-circle--duotone div:nth-child(2) {
          top: 50%;
          left: 50%;
          width: 12.5%;
          height: 12.5%;
          background: transparent;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }
        
        .neat-icon.ni-close-circle--filled div:nth-child(3) {
          top: 50%;
          left: 50%;
          width: 87.5%;
          height: 87.5%;
          background: var(--color-primary);
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          z-index: 1;
        }
        
        .neat-icon.ni-close-circle--filled div:nth-child(4) {
          top: 50%;
          left: 50%;
          width: 62.5%;
          height: 6.25%;
          transform: translate(-50%, -50%) rotate(-45deg);
          background: white;
          border: none;
          z-index: 2;
        }
        
        /* OUTLINE */
        
        .neat-icon.ni-close-circle--outline div:nth-child(1),
        .neat-icon.ni-close-circle--duotone div:nth-child(1) {
          top: 50%;
          left: 50%;
          width: 62.5%;
          height: 6.25%;
          transform: translate(-50%, -50%) rotate(45deg);
          background: var(--color-primary);
          border: none;
          z-index: 2;
        }
        
        .neat-icon.ni-close-circle--outline div:nth-child(3) {
          top: 50%;
          left: 50%;
          width: 87.5%;
          height: 87.5%;
          background: transparent;
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          z-index: 1;
        }
        
        .neat-icon.ni-close-circle--outline div:nth-child(4),
        .neat-icon.ni-close-circle--duotone div:nth-child(4) {
          top: 50%;
          left: 50%;
          width: 62.5%;
          height: 6.25%;
          transform: translate(-50%, -50%) rotate(-45deg);
          background: var(--color-primary);
          border: none;
          z-index: 2;
        }
        
        /* DUOTONE */
        
        .neat-icon.ni-close-circle--duotone div:nth-child(3) {
          top: 50%;
          left: 50%;
          width: 87.5%;
          height: 87.5%;
          background: var(--color-secondary);
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          z-index: 1;
        }
        
        /* @Name: code */
        /* @Category: tools, interface, arrows */
        /* @Aliases: expand, snippet, tag, angle, braces */
        
        
        /* ALL */
        
        .neat-icon.ni-code--filled div:nth-child(1),
        .neat-icon.ni-code--outline div:nth-child(1),
        .neat-icon.ni-code--duotone div:nth-child(1) {
          top: 50%;
          left: 18.75%;
          width: 25%;
          height: 6.25%;
          transform-origin: top left;
          transform: translateY(-70%) rotate(45deg);
          background: var(--color-primary);
          border: none;
        }
        
        .neat-icon.ni-code--filled div:nth-child(2),
        .neat-icon.ni-code--outline div:nth-child(2),
        .neat-icon.ni-code--duotone div:nth-child(2) {
          top: 50%;
          left: 18.75%;
          width: 25%;
          height: 6.25%;
          transform-origin: bottom left;
          transform: translateY(-30%) rotate(-45deg);
          background: var(--color-primary);
          border: none;
        }
        
        .neat-icon.ni-code--filled div:nth-child(3),
        .neat-icon.ni-code--outline div:nth-child(3),
        .neat-icon.ni-code--duotone div:nth-child(3) {
          top: 50%;
          left: 56.25%;
          width: 25%;
          height: 6.25%;
          transform-origin: top right;
          transform: translateY(-70%) rotate(-45deg);
          background: var(--color-primary);
          border: none;
        }
        
        .neat-icon.ni-code--filled div:nth-child(4),
        .neat-icon.ni-code--outline div:nth-child(4),
        .neat-icon.ni-code--duotone div:nth-child(4) {
          top: 50%;
          left: 56.25%;
          width: 25%;
          height: 6.25%;
          transform-origin: bottom right;
          transform: translateY(-30%) rotate(45deg);
          background: var(--color-primary);
          border: none;
        }
        
        /* @Name: copyright circle */
        /* @Category: interface, circle, notifications */
        /* @Aliases:  */
        
        
        /* FILLED */
        
        .neat-icon.ni-copyright-circle--filled div:nth-child(1),
        .neat-icon.ni-copyright-circle--filled div:nth-child(2),
        .neat-icon.ni-copyright-circle--filled div:nth-child(4),
        .neat-icon.ni-copyright-circle--outline div:nth-child(1),
        .neat-icon.ni-copyright-circle--outline div:nth-child(2),
        .neat-icon.ni-copyright-circle--outline div:nth-child(4),
        .neat-icon.ni-copyright-circle--duotone div:nth-child(1),
        .neat-icon.ni-copyright-circle--duotone div:nth-child(2),
        .neat-icon.ni-copyright-circle--duotone div:nth-child(4) {
          top: 50%;
          left: 50%;
          width: 12.5%;
          height: 12.5%;
          transform: translate(-50%, -50%);
          background: transparent;
          border: none;
        }
        
        .neat-icon.ni-copyright-circle--filled div:nth-child(3) {
          top: 50%;
          left: 50%;
          width: 87.5%;
          height: 87.5%;
          transform: translate(-50%, -50%);
          background: var(--color-primary);
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-radius: 50%;
        }
        
        .neat-icon.ni-copyright-circle--filled div:nth-child(3)::after {
          content: '${String.fromCodePoint(0x0063)}';
          top: 40%;
          left: 50%;
          color: white;
          font-size: calc(var(--icon-size) / 1.25);
          font-weight: 700;
          transform: translate(-50%, -50%);
        }
        
        /* OUTLINE */
        
        .neat-icon.ni-copyright-circle--outline div:nth-child(3) {
          top: 50%;
          left: 50%;
          width: 87.5%;
          height: 87.5%;
          transform: translate(-50%, -50%);
          background: transparent;
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-radius: 50%;
        }
        
        .neat-icon.ni-copyright-circle--outline div:nth-child(3)::after,
        .neat-icon.ni-copyright-circle--duotone div:nth-child(3)::after {
          content: '${String.fromCodePoint(0x0063)}';
          top: 40%;
          left: 50%;
          color: var(--color-primary);
          font-size: calc(var(--icon-size) / 1.25);
          font-weight: 700;
          transform: translate(-50%, -50%);
        }
        
        /* DUOTONE */
        
        .neat-icon.ni-copyright-circle--duotone div:nth-child(3) {
          top: 50%;
          left: 50%;
          width: 87.5%;
          height: 87.5%;
          transform: translate(-50%, -50%);
          background: var(--color-secondary);
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-radius: 50%;
        }
        
        /* @Name: credit card */
        /* @Category: tools, payment, interface */
        /* @Aliases: debit, bank, number */
        
        
        /* FILLED */
        
        .neat-icon.ni-credit-card--filled div:nth-child(1),
        .neat-icon.ni-credit-card--outline div:nth-child(1),
        .neat-icon.ni-credit-card--duotone div:nth-child(1) {
          top: 35%;
          left: 50%;
          width: 87.5%;
          height: 15%;
          transform: translateX(-50%);
          background: var(--color-primary);
          z-index: 2;
        }
        
        .neat-icon.ni-credit-card--filled div:nth-child(2),
        .neat-icon.ni-credit-card--filled div:nth-child(4),
        .neat-icon.ni-credit-card--outline div:nth-child(2),
        .neat-icon.ni-credit-card--outline div:nth-child(4),
        .neat-icon.ni-credit-card--duotone div:nth-child(2),
        .neat-icon.ni-credit-card--duotone div:nth-child(4) {
          top: 50%;
          left: 50%;
          width: 12.5%;
          height: 12.5%;
          background: transparent;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }
        
        .neat-icon.ni-credit-card--filled div:nth-child(3),
        .neat-icon.ni-credit-card--outline div:nth-child(3) {
          top: 50%;
          left: 50%;
          width: 87.5%;
          height: 62.5%;
          transform: translate(-50%, -50%);
          background: transparent;
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-radius: calc(var(--icon-size) / 16);
        }
        
        /* DUOTONE */
        .neat-icon.ni-credit-card--duotone div:nth-child(3) {
          top: 50%;
          left: 50%;
          width: 87.5%;
          height: 62.5%;
          transform: translate(-50%, -50%);
          background: var(--color-secondary);
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-radius: calc(var(--icon-size) / 16);
        }
        
        /* @Name: dialpad */
        /* @Category: navigation, interface */
        /* @Aliases: pad, phone, digits */
        
        
        
        /* ALL */
        
        .neat-icon.ni-dialpad--filled div:nth-child(1),
        .neat-icon.ni-dialpad--outline div:nth-child(1),
        .neat-icon.ni-dialpad--duotone div:nth-child(1) {
          top: 6.25%;
          left: 50%;
          width: 12.5%;
          height: 12.5%;
          transform: translateX(-50%);
          background: var(--color-primary);
          border: none;
          border-radius: 50%;
        }
        
        .neat-icon.ni-dialpad--filled div:nth-child(1)::before,
        .neat-icon.ni-dialpad--outline div:nth-child(1)::before,
        .neat-icon.ni-dialpad--duotone div:nth-child(1)::before,
        .neat-icon.ni-dialpad--filled div:nth-child(2)::before,
        .neat-icon.ni-dialpad--outline div:nth-child(2)::before,
        .neat-icon.ni-dialpad--duotone div:nth-child(2)::before,
        .neat-icon.ni-dialpad--filled div:nth-child(3)::before,
        .neat-icon.ni-dialpad--outline div:nth-child(3)::before,
        .neat-icon.ni-dialpad--duotone div:nth-child(3)::before {
          content: '';
          top: 0;
          left: -150%;
          width: 100%;
          height: 100%;
          transform: translateX(-50%);
          background: var(--color-primary);
          border: none;
          border-radius: 50%;
        }
        
        .neat-icon.ni-dialpad--filled div:nth-child(1)::after,
        .neat-icon.ni-dialpad--outline div:nth-child(1)::after,
        .neat-icon.ni-dialpad--duotone div:nth-child(1)::after,
        .neat-icon.ni-dialpad--filled div:nth-child(2)::after,
        .neat-icon.ni-dialpad--outline div:nth-child(2)::after,
        .neat-icon.ni-dialpad--duotone div:nth-child(2)::after,
        .neat-icon.ni-dialpad--filled div:nth-child(3)::after,
        .neat-icon.ni-dialpad--outline div:nth-child(3)::after,
        .neat-icon.ni-dialpad--duotone div:nth-child(3)::after {
          content: '';
          top: 0;
          left: 250%;
          width: 100%;
          height: 100%;
          transform: translateX(-50%);
          background: var(--color-primary);
          border: none;
          border-radius: 50%;
        }
        
        .neat-icon.ni-dialpad--filled div:nth-child(2),
        .neat-icon.ni-dialpad--outline div:nth-child(2),
        .neat-icon.ni-dialpad--duotone div:nth-child(2) {
          top: 31.25%;
          left: 50%;
          width: 12.5%;
          height: 12.5%;
          transform: translateX(-50%);
          background: var(--color-primary);
          border: none;
          border-radius: 50%;
        }
        
        .neat-icon.ni-dialpad--filled div:nth-child(3),
        .neat-icon.ni-dialpad--outline div:nth-child(3),
        .neat-icon.ni-dialpad--duotone div:nth-child(3) {
          top: 56.25%;
          left: 50%;
          width: 12.5%;
          height: 12.5%;
          transform: translateX(-50%);
          background: var(--color-primary);
          border: none;
          border-radius: 50%;
        }
        
        .neat-icon.ni-dialpad--filled div:nth-child(4),
        .neat-icon.ni-dialpad--outline div:nth-child(4),
        .neat-icon.ni-dialpad--duotone div:nth-child(4) {
          top: 81.25%;
          left: 50%;
          width: 12.5%;
          height: 12.5%;
          transform: translateX(-50%);
          background: var(--color-primary);
          border: none;
          border-radius: 50%;
        }
        
        /* @Name: dots horizontal */
        /* @Category: tools, navigation, interface */
        /* @Aliases: more, menu, info, details, points */
        
        
        * ALL */
        
        .neat-icon.ni-dots-horizontal--filled div:nth-child(1),
        .neat-icon.ni-dots-horizontal--outline div:nth-child(1),
        .neat-icon.ni-dots-horizontal--duotone div:nth-child(1),
        .neat-icon.ni-dots-horizontal--filled div:nth-child(4),
        .neat-icon.ni-dots-horizontal--outline div:nth-child(4),
        .neat-icon.ni-dots-horizontal--duotone div:nth-child(4) {
          top: 50%;
          left: 50%;
          width: 12.5%;
          height: 12.5%;
          transform: translate(-50%, -50%);
          background: var(--color-primary);
          border: none;
          border-radius: 50%;
        }
        
        .neat-icon.ni-dots-horizontal--filled div:nth-child(2),
        .neat-icon.ni-dots-horizontal--outline div:nth-child(2),
        .neat-icon.ni-dots-horizontal--duotone div:nth-child(2) {
          top: 50%;
          left: 25%;
          width: 12.5%;
          height: 12.5%;
          transform: translate(-50%, -50%);
          background: var(--color-primary);
          border: none;
          border-radius: 50%;
        }
        
        .neat-icon.ni-dots-horizontal--filled div:nth-child(3),
        .neat-icon.ni-dots-horizontal--outline div:nth-child(3),
        .neat-icon.ni-dots-horizontal--duotone div:nth-child(3) {
          top: 50%;
          left: 75%;
          width: 12.5%;
          height: 12.5%;
          transform: translate(-50%, -50%);
          background: var(--color-primary);
          border: none;
          border-radius: 50%;
        }
        
        /* @Name: dots vertical */
        /* @Category: tools, navigation, interface */
        /* @Aliases: more, menu, info, details, points */
        
        
        /* ALL */
        
        .neat-icon.ni-dots-vertical--filled div:nth-child(1),
        .neat-icon.ni-dots-vertical--outline div:nth-child(1),
        .neat-icon.ni-dots-vertical--duotone div:nth-child(1) {
          top: 18.75%;
          left: 50%;
          width: 12.5%;
          height: 12.5%;
          transform: translateX(-50%);
          background: var(--color-primary);
          border: none;
          border-radius: 50%;
        }
        
        .neat-icon.ni-dots-vertical--filled div:nth-child(2),
        .neat-icon.ni-dots-vertical--outline div:nth-child(2),
        .neat-icon.ni-dots-vertical--duotone div:nth-child(2),
        .neat-icon.ni-dots-vertical--filled div:nth-child(3),
        .neat-icon.ni-dots-vertical--outline div:nth-child(3),
        .neat-icon.ni-dots-vertical--duotone div:nth-child(3) {
          top: 50%;
          left: 50%;
          width: 12.5%;
          height: 12.5%;
          transform: translate(-50%, -50%);
          background: var(--color-primary);
          border: none;
          border-radius: 50%;
        }
        
        .neat-icon.ni-dots-vertical--filled div:nth-child(4),
        .neat-icon.ni-dots-vertical--outline div:nth-child(4),
        .neat-icon.ni-dots-vertical--duotone div:nth-child(4) {
          top: 68.75%;
          left: 50%;
          width: 12.5%;
          height: 12.5%;
          transform: translateX(-50%);
          background: var(--color-primary);
          border: none;
          border-radius: 50%;
        }
        
        /* @Name: drag indicator */
        /* @Category: interface */
        /* @Aliases: dots, touch, move  */
        
        
        /* ALL */
        
        .neat-icon.ni-drag-indicator--filled div:nth-child(1),
        .neat-icon.ni-drag-indicator--outline div:nth-child(1),
        .neat-icon.ni-drag-indicator--duotone div:nth-child(1) {
          top: 18.75%;
          left: 62.5%;
          width: 12.5%;
          height: 12.5%;
          transform: translateX(-50%);
          background: var(--color-primary);
          border: none;
          border-radius: 50%;
        }
        
        .neat-icon.ni-drag-indicator--filled div:nth-child(1)::before,
        .neat-icon.ni-drag-indicator--outline div:nth-child(1)::before,
        .neat-icon.ni-drag-indicator--duotone div:nth-child(1)::before,
        .neat-icon.ni-drag-indicator--filled div:nth-child(2)::before,
        .neat-icon.ni-drag-indicator--outline div:nth-child(2)::before,
        .neat-icon.ni-drag-indicator--duotone div:nth-child(2)::before,
        .neat-icon.ni-drag-indicator--filled div:nth-child(3)::before,
        .neat-icon.ni-drag-indicator--outline div:nth-child(3)::before,
        .neat-icon.ni-drag-indicator--duotone div:nth-child(3)::before,
        .neat-icon.ni-drag-indicator--filled div:nth-child(4)::before,
        .neat-icon.ni-drag-indicator--outline div:nth-child(4)::before,
        .neat-icon.ni-drag-indicator--duotone div:nth-child(4)::before {
          content: '';
          top: 0;
          left: -150%;
          width: 100%;
          height: 100%;
          transform: translateX(-50%);
          background: var(--color-primary);
          border: none;
          border-radius: 50%;
        }
        
        .neat-icon.ni-drag-indicator--filled div:nth-child(2),
        .neat-icon.ni-drag-indicator--outline div:nth-child(2),
        .neat-icon.ni-drag-indicator--duotone div:nth-child(2),
        .neat-icon.ni-drag-indicator--filled div:nth-child(3),
        .neat-icon.ni-drag-indicator--outline div:nth-child(3),
        .neat-icon.ni-drag-indicator--duotone div:nth-child(3) {
          top: 50%;
          left: 62.5%;
          width: 12.5%;
          height: 12.5%;
          transform: translate(-50%, -50%);
          background: var(--color-primary);
          border: none;
          border-radius: 50%;
        }
        
        .neat-icon.ni-drag-indicator--filled div:nth-child(4),
        .neat-icon.ni-drag-indicator--outline div:nth-child(4),
        .neat-icon.ni-drag-indicator--duotone div:nth-child(4) {
          top: 68.75%;
          left: 62.5%;
          width: 12.5%;
          height: 12.5%;
          transform: translateX(-50%);
          background: var(--color-primary);
          border: none;
          border-radius: 50%;
        }
        
        /* @Name: drawer left */
        /* @Category: tools, navigation, interface */
        /* @Aliases: navigation, burger, menu, three, lines, open, nav, drawer */
        
        
        .neat-icon.ni-drawer-left--filled div:nth-child(1),
        .neat-icon.ni-drawer-left--outline div:nth-child(1),
        .neat-icon.ni-drawer-left--duotone div:nth-child(1) {
          top: 25%;
          left: 25%;
          width: 68.75%;
          height: 6.25%;
          transform: translateY(-50%);
          background: var(--color-primary);
          border: none;
          box-shadow: 0 calc(var(--icon-size) / 64) 0 var(--color-primary), 0 calc(var(--icon-size) / -64) 0 var(--color-primary);
        }
        
        .neat-icon.ni-drawer-left--filled div:nth-child(2),
        .neat-icon.ni-drawer-left--outline div:nth-child(2),
        .neat-icon.ni-drawer-left--duotone div:nth-child(2),
        .neat-icon.ni-drawer-left--filled div:nth-child(3),
        .neat-icon.ni-drawer-left--outline div:nth-child(3),
        .neat-icon.ni-drawer-left--duotone div:nth-child(3) {
          top: 50%;
          left: 37.5%;
          width: 56.25%;
          height: 6.25%;
          transform: translateY(-50%);
          background: var(--color-primary);
          border: none;
          box-shadow: 0 calc(var(--icon-size) / 64) 0 var(--color-primary), 0 calc(var(--icon-size) / -64) 0 var(--color-primary);
        }
        
        .neat-icon.ni-drawer-left--filled div:nth-child(4),
        .neat-icon.ni-drawer-left--outline div:nth-child(4),
        .neat-icon.ni-drawer-left--duotone div:nth-child(4) {
          top: 75%;
          left: 18.75%;
          width: 75%;
          height: 6.25%;
          transform: translateY(-50%);
          background: var(--color-primary);
          border: none;
          box-shadow: 0 calc(var(--icon-size) / 64) 0 var(--color-primary), 0 calc(var(--icon-size) / -64) 0 var(--color-primary);
        }
        
        /* @Name: drawer left */
        /* @Category: tools, navigation, interface */
        /* @Aliases: navigation, burger, menu, three, lines, open, nav, drawer */
        
        
        .neat-icon.ni-drawer-right--filled div:nth-child(1),
        .neat-icon.ni-drawer-right--outline div:nth-child(1),
        .neat-icon.ni-drawer-right--duotone div:nth-child(1) {
          top: 25%;
          left: 6.25%;
          width: 68.75%;
          height: 6.25%;
          transform: translateY(-50%);
          background: var(--color-primary);
          border: none;
          box-shadow: 0 calc(var(--icon-size) / 64) 0 var(--color-primary), 0 calc(var(--icon-size) / -64) 0 var(--color-primary);
        }
        
        .neat-icon.ni-drawer-right--filled div:nth-child(2),
        .neat-icon.ni-drawer-right--outline div:nth-child(2),
        .neat-icon.ni-drawer-right--duotone div:nth-child(2),
        .neat-icon.ni-drawer-right--filled div:nth-child(3),
        .neat-icon.ni-drawer-right--outline div:nth-child(3),
        .neat-icon.ni-drawer-right--duotone div:nth-child(3) {
          top: 50%;
          left: 6.25%;
          width: 56.25%;
          height: 6.25%;
          transform: translateY(-50%);
          background: var(--color-primary);
          border: none;
          box-shadow: 0 calc(var(--icon-size) / 64) 0 var(--color-primary), 0 calc(var(--icon-size) / -64) 0 var(--color-primary);
        }
        
        .neat-icon.ni-drawer-right--filled div:nth-child(4),
        .neat-icon.ni-drawer-right--outline div:nth-child(4),
        .neat-icon.ni-drawer-right--duotone div:nth-child(4) {
          top: 75%;
          left: 6.25%;
          width: 75%;
          height: 6.25%;
          transform: translateY(-50%);
          background: var(--color-primary);
          border: none;
          box-shadow: 0 calc(var(--icon-size) / 64) 0 var(--color-primary), 0 calc(var(--icon-size) / -64) 0 var(--color-primary);
        }
        
        /* @Name: email */
        /* @Category: interface, notifications */
        /* @Aliases: mail, letter, message */
        
        
        /* FILLED */
        
        .neat-icon.ni-email--filled div:nth-child(1) {
          top: 18.75%;
          left: 12.5%;
          width: 50%;
          height: calc(var(--icon-size) / 16);
          background: white;
          transform-origin: center left;
          transform: rotate(38deg);
          z-index: 2;
        }
        
        .neat-icon.ni-email--filled div:nth-child(2),
        .neat-icon.ni-email--outline div:nth-child(2),
        .neat-icon.ni-email--duotone div:nth-child(2) {
          top: 18.75%;
          left: 37.5%;
          width: 50%;
          height: calc(var(--icon-size) / 16);
          background: white;
          transform-origin: center right;
          transform: rotate(-38deg);
          z-index: 2;
        }
        
        .neat-icon.ni-email--filled div:nth-child(3),
        .neat-icon.ni-email--outline div:nth-child(3) {
          top: 50%;
          left: 50%;
          width: 87.5%;
          height: 62.5%;
          transform: translate(-50%, -50%);
          background: var(--color-primary);
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-radius: calc(var(--icon-size) / 16);
        }
        
        .neat-icon.ni-email--filled div:nth-child(4),
        .neat-icon.ni-email--outline div:nth-child(4),
        .neat-icon.ni-email--duotone div:nth-child(4) {
          top: 50%;
          left: 50%;
          width: 12.5%;
          height: 12.5%;
          background: transparent;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }
        
        /* OUTLINE */
        
        .neat-icon.ni-email--outline div:nth-child(1),
        .neat-icon.ni-email--duotone div:nth-child(1) {
          top: 18.75%;
          left: 12.5%;
          width: 50%;
          height: calc(var(--icon-size) / 16);
          background: var(--color-primary);
          transform-origin: center left;
          transform: rotate(38deg);
          z-index: 2;
        }
        
        .neat-icon.ni-email--outline div:nth-child(2),
        .neat-icon.ni-email--duotone div:nth-child(2) {
          top: 18.75%;
          left: 37.5%;
          width: 50%;
          height: calc(var(--icon-size) / 16);
          background: var(--color-primary);
          transform-origin: center right;
          transform: rotate(-38deg);
          z-index: 2;
        }
        
        .neat-icon.ni-email--outline div:nth-child(3) {
          top: 50%;
          left: 50%;
          width: 87.5%;
          height: 62.5%;
          transform: translate(-50%, -50%);
          background: transparent;
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-radius: calc(var(--icon-size) / 16);
        }
        
        /* DUOTONE */
        .neat-icon.ni-email--duotone div:nth-child(3) {
          top: 50%;
          left: 50%;
          width: 87.5%;
          height: 62.5%;
          transform: translate(-50%, -50%);
          background: var(--color-secondary);
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-radius: calc(var(--icon-size) / 16);
        }
        
        /* @Name: favorite */
        /* @Category: tools, interface */
        /* @Aliases: heart, favourite, love, like, score, rate */
        
        /* FILLED */
        
        .neat-icon.ni-favorite--filled div:nth-child(1),
        .neat-icon.ni-favorite--outline div:nth-child(1),
        .neat-icon.ni-favorite--duotone div:nth-child(1),
        .neat-icon.ni-favorite--outline div:nth-child(2),
        .neat-icon.ni-favorite--filled div:nth-child(4),
        .neat-icon.ni-favorite--outline div:nth-child(4),
        .neat-icon.ni-favorite--duotone div:nth-child(4) {
          top: 50%;
          left: 50%;
          width: 12.5%;
          height: 12.5%;
          background: transparent;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }
        
        .neat-icon.ni-favorite--filled div:nth-child(2) {
          top: 50%;
          left: 50%;
          width: 37.5%;
          height: 37.5%;
          background: var(--color-primary);
          border: none;
          transform: translate(-50%, -50%) rotate(45deg);
        }
        
        .neat-icon.ni-favorite--filled div:nth-child(2)::before {
          content: '';
          top: -42.5%;
          left: 50%;
          width: 100%;
          height: 100%;
          background: var(--color-primary);
          border-radius: 50%;
          transform: translateX(-50%);
        }
        
        .neat-icon.ni-favorite--filled div:nth-child(2)::after {
          content: '';
          top: 0;
          left: 7.5%;
          width: 100%;
          height: 100%;
          background: var(--color-primary);
          border-radius: 50%;
          transform: translateX(-50%);
        }
        
        .neat-icon.ni-favorite--filled div:nth-child(3),
        .neat-icon.ni-favorite--outline div:nth-child(3),
        .neat-icon.ni-favorite--duotone div:nth-child(3) {
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: transparent;
          border: none;
          z-index: 2;
        }
        
        .neat-icon.ni-favorite--filled div:nth-child(3)::before,
        .neat-icon.ni-favorite--outline div:nth-child(3)::before,
        .neat-icon.ni-favorite--duotone div:nth-child(3)::before {
          content: '${String.fromCodePoint(0x2661)}';
          top: 53%;
          left: 50%;
          color: var(--color-primary);
          font-size: calc(var(--icon-size) / 1.25);
          line-height: calc(var(--icon-size) / 1.25);
          transform: translate(-50%, -50%) scale(1, .75);
        }
        
        .neat-icon.ni-favorite--filled div:nth-child(3)::after,
        .neat-icon.ni-favorite--outline div:nth-child(3)::after,
        .neat-icon.ni-favorite--duotone div:nth-child(3)::after {
          content: '${String.fromCodePoint(0x2661)}';
          top: 50%;
          left: 50%;
          color: var(--color-primary);
          font-size: calc(var(--icon-size) / 1.25);
          line-height: calc(var(--icon-size) / 1.25);
          transform: translate(-50%, -50%) scale(1, .75);
          text-shadow: calc(var(--icon-size) / 96) calc(var(--icon-size) / 96) 0 var(--color-primary), calc(var(--icon-size) / -96) calc(var(--icon-size) / -96) 0 var(--color-primary), calc(var(--icon-size) / -96) calc(var(--icon-size) / 96) 0 var(--color-primary), calc(var(--icon-size) / 96) calc(var(--icon-size) / -96) 0 var(--color-primary);
        }
        
        /* DUOTONE */
        
        .neat-icon.ni-favorite--duotone div:nth-child(2) {
          top: 50%;
          left: 50%;
          width: 37.5%;
          height: 37.5%;
          background: var(--color-secondary);
          border: none;
          transform: translate(-50%, -50%) rotate(45deg);
        }
        
        .neat-icon.ni-favorite--duotone div:nth-child(2)::before {
          content: '';
          top: -42.5%;
          left: 50%;
          width: 100%;
          height: 100%;
          background: var(--color-secondary);
          border-radius: 50%;
          transform: translateX(-50%);
        }
        
        .neat-icon.ni-favorite--duotone div:nth-child(2)::after {
          content: '';
          top: 0;
          left: 7.5%;
          width: 100%;
          height: 100%;
          background: var(--color-secondary);
          border-radius: 50%;
          transform: translateX(-50%);
        }
        
        /* @Name: forward */
        /* @Category: arrows, interface, direction */
        /* @Aliases: pointer, right, next, arrowhead, arrow */
        
        
        /* FILLED */
        
        .neat-icon.ni-forward--filled div:nth-child(1),
        .neat-icon.ni-forward--outline div:nth-child(1),
        .neat-icon.ni-forward--duotone div:nth-child(1) {
          top: 50%;
          left: 50%;
          width: 12.5%;
          height: 12.5%;
          background: transparent;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }
        
        .neat-icon.ni-forward--filled div:nth-child(2) {
          top: 35%;
          left: 20%;
          width: 45%;
          height: 30%;
          background: var(--color-primary);
          z-index: 1;
        }
        
        .neat-icon.ni-forward--filled div:nth-child(3),
        .neat-icon.ni-forward--outline div:nth-child(3),
        .neat-icon.ni-forward--duotone div:nth-child(3) {
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: transparent;
          border: none;
          z-index: 2;
        }
        
        .neat-icon.ni-forward--filled div:nth-child(3)::after,
        .neat-icon.ni-forward--outline div:nth-child(3)::after,
        .neat-icon.ni-forward--duotone div:nth-child(3)::after {
          content: '${String.fromCodePoint(0x21e7)}';
          top: 50%;
          left: 50%;
          color: var(--color-primary);
          font-size: calc(var(--icon-size) / 1.15);
          transform: translate(-50%, -50%) rotate(90deg);
        }
        
        .neat-icon.ni-forward--filled div:nth-child(4) {
          top: 20%;
          left: 50%;
          width: 0;
          height: 0;
          background: transparent;
          border: calc(var(--icon-size) / 3.25) solid transparent;
          border-left: calc(var(--icon-size) / 3.25) solid var(--color-primary);
          border-right-width: 0;
          z-index: 1;
        }
        
        /* OUTLINE */
        
        .neat-icon.ni-forward--duotone div:nth-child(2) {
          top: 35%;
          left: 20%;
          width: 45%;
          height: 30%;
          background: var(--color-secondary);
          z-index: 1;
        }
        
        .neat-icon.ni-forward--duotone div:nth-child(4) {
          top: 20%;
          left: 50%;
          width: 0;
          height: 0;
          background: transparent;
          border: calc(var(--icon-size) / 3.25) solid transparent;
          border-left: calc(var(--icon-size) / 3.25) solid var(--color-secondary);
          border-right-width: 0;
          z-index: 1;
        }
        
        /* @Name: history */
        /* @Category: arrows, interface */
        /* @Aliases: back, time, revert, undo, log */
        
        
        /* ALL */
        
        /* Minute arrow */
        .neat-icon.ni-history--filled div:nth-child(1),
        .neat-icon.ni-history--outline div:nth-child(1),
        .neat-icon.ni-history--duotone div:nth-child(1) {
          top: 55%;
          left: 50%;
          width: 28%;
          height: calc(var(--icon-size) / 16);;
          background: var(--color-primary);
          border: none;
          border-radius: 0;
          transform-origin: center left;
          transform: translateY(25%) rotate(-90deg);
          z-index: 2;
        }
        
        .neat-icon.ni-history--filled div:nth-child(2),
        .neat-icon.ni-history--outline div:nth-child(2),
        .neat-icon.ni-history--duotone div:nth-child(2) {
          top: 50%;
          left: 50%;
          width: 72.25%;
          height: 72.25%;
          transform: translate(-50%, -45%) rotate(-85deg);
          background: transparent;
          border: calc(var(--icon-size) / 16) solid;
          border-top-color: var(--color-primary);
          border-bottom-color: var(--color-primary);
          border-left-color: transparent;
          border-right-color: var(--color-primary);
          border-radius: 50%;
        }
        
        .neat-icon.ni-history--filled div:nth-child(2)::after,
        .neat-icon.ni-history--outline div:nth-child(2)::after,
        .neat-icon.ni-history--duotone div:nth-child(2)::after {
          content: '${String.fromCodePoint(0x25b6)}';
          top: -15%;
          left: 0;
          color: var(--color-primary);
          font-size: calc(var(--icon-size) / 4);
          transform: rotate(18deg);
        }
        
        .neat-icon.ni-history--filled div:nth-child(3),
        .neat-icon.ni-history--outline div:nth-child(3),
        .neat-icon.ni-history--duotone div:nth-child(3) {
          top: 50%;
          left: 50%;
          width: 12.5%;
          height: 12.5%;
          background: transparent;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }
        
        /* Hour arrow */
        .neat-icon.ni-history--filled div:nth-child(4),
        .neat-icon.ni-history--outline div:nth-child(4),
        .neat-icon.ni-history--duotone div:nth-child(4) {
          top: 55%;
          left: 50%;
          width: 21.5%;
          height: calc(var(--icon-size) / 16);;
          background: var(--color-primary);
          border: none;
          border-radius: 0;
          transform-origin: center left;
          transform: translateX(-7%) rotate(24deg);
          z-index: 2;
        }
        
        /* @Name: info circle */
        /* @Category: interface, notifications, circle */
        /* @Aliases: details, question */
        
        
        /* FILLED */
        
        .neat-icon.ni-info-circle--filled div:nth-child(1),
        .neat-icon.ni-info-circle--filled div:nth-child(2),
        .neat-icon.ni-info-circle--filled div:nth-child(4),
        .neat-icon.ni-info-circle--outline div:nth-child(1),
        .neat-icon.ni-info-circle--outline div:nth-child(2),
        .neat-icon.ni-info-circle--outline div:nth-child(4),
        .neat-icon.ni-info-circle--duotone div:nth-child(1),
        .neat-icon.ni-info-circle--duotone div:nth-child(2),
        .neat-icon.ni-info-circle--duotone div:nth-child(4) {
          top: 50%;
          left: 50%;
          width: 12.5%;
          height: 12.5%;
          transform: translate(-50%, -50%);
          background: transparent;
          border: none;
        }
        
        .neat-icon.ni-info-circle--filled div:nth-child(3) {
          top: 50%;
          left: 50%;
          width: 87.5%;
          height: 87.5%;
          transform: translate(-50%, -50%);
          background: var(--color-primary);
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-radius: 50%;
        }
        
        .neat-icon.ni-info-circle--filled div:nth-child(3)::after {
          content: '${String.fromCodePoint(0x003F)}';
          top: 50%;
          left: 50%;
          color: white;
          font-size: calc(var(--icon-size) / 1.5);
          font-weight: 700;
          transform: translate(-50%, -50%);
        }
        
        /* OUTLINE */
        
        .neat-icon.ni-info-circle--outline div:nth-child(3) {
          top: 50%;
          left: 50%;
          width: 87.5%;
          height: 87.5%;
          transform: translate(-50%, -50%);
          background: transparent;
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-radius: 50%;
        }
        
        .neat-icon.ni-info-circle--outline div:nth-child(3)::after,
        .neat-icon.ni-info-circle--duotone div:nth-child(3)::after {
          content: '${String.fromCodePoint(0x003F)}';
          top: 50%;
          left: 50%;
          color: var(--color-primary);
          font-size: calc(var(--icon-size) / 1.5);
          font-weight: 700;
          transform: translate(-50%, -50%);
        }
        
        /* DUOTONE */
        
        .neat-icon.ni-info-circle--duotone div:nth-child(3) {
          top: 50%;
          left: 50%;
          width: 87.5%;
          height: 87.5%;
          transform: translate(-50%, -50%);
          background: var(--color-secondary);
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-radius: 50%;
        }
        
        /* @Name: label */
        /* @Category: interface */
        /* @Aliases: tag, mark, price */
        
        
        /* FILLED */
        
        .neat-icon.ni-label--filled div:nth-child(1) {
          top: 50%;
          left: 81.25%;
          width: 0;
          height: 0;
          background: transparent;
          border-top: calc(var(--icon-size) / 4) solid transparent;
          border-bottom: calc(var(--icon-size) / 4) solid transparent;
          border-left: calc(var(--icon-size) / 4) solid var(--color-primary);
          border-right-width: 0;
          transform: translate(-100%, -50%);
          z-index: 1;
        }
        
        .neat-icon.ni-label--filled div:nth-child(2),
        .neat-icon.ni-label--outline div:nth-child(2),
        .neat-icon.ni-label--duotone div:nth-child(2),
        .neat-icon.ni-label--filled div:nth-child(4),
        .neat-icon.ni-label--outline div:nth-child(4),
        .neat-icon.ni-label--duotone div:nth-child(4) {
          top: 50%;
          left: 50%;
          width: 12.5%;
          height: 12.5%;
          background: transparent;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }
        
        .neat-icon.ni-label--filled div:nth-child(3) {
          top: 50%;
          left: 50%;
          width: 50%;
          height: 50%;
          background: var(--color-primary);
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-right-width: 0;
          border-top-left-radius: calc(var(--icon-size) / 16);
          border-bottom-left-radius: calc(var(--icon-size) / 16);
          transform: translate(-75%, -50%);
          z-index: 2;
        }
        
        .neat-icon.ni-label--filled div:nth-child(3)::before,
        .neat-icon.ni-label--outline div:nth-child(3)::before,
        .neat-icon.ni-label--duotone div:nth-child(3)::before {
          content: '';
          top: calc(var(--icon-size) / -16);
          left: 100%;
          width: 78%;
          height: calc(var(--icon-size) / 16);
          background: var(--color-primary);
          border: none;
          transform-origin: top left;
          transform: rotate(47deg);
        }
        
        .neat-icon.ni-label--filled div:nth-child(3)::after,
        .neat-icon.ni-label--outline div:nth-child(3)::after,
        .neat-icon.ni-label--duotone div:nth-child(3)::after {
          content: '';
          top: 100%;
          left: 100%;
          width: 78%;
          height: calc(var(--icon-size) / 16);
          background: var(--color-primary);
          border: none;
          transform-origin: bottom left;
          transform: rotate(-47deg);
        }
        
        /* OUTLINE */
        
        .neat-icon.ni-label--outline div:nth-child(1) {
          top: 50%;
          left: 81.25%;
          width: 0;
          height: 0;
          background: transparent;
          border: none;
          transform: translate(-100%, -50%);
          z-index: 1;
        }
        
        .neat-icon.ni-label--outline div:nth-child(3) {
          top: 50%;
          left: 50%;
          width: 50%;
          height: 50%;
          background: transparent;
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-right-width: 0;
          border-top-left-radius: calc(var(--icon-size) / 16);
          border-bottom-left-radius: calc(var(--icon-size) / 16);
          transform: translate(-75%, -50%);
          z-index: 2;
        }
        
        /* DUOTONE */
        
        .neat-icon.ni-label--duotone div:nth-child(1) {
          top: 50%;
          left: 81.25%;
          width: 0;
          height: 0;
          background: transparent;
          border-top: calc(var(--icon-size) / 4) solid transparent;
          border-bottom: calc(var(--icon-size) / 4) solid transparent;
          border-left: calc(var(--icon-size) / 4) solid var(--color-secondary);
          border-right-width: 0;
          transform: translate(-100%, -50%);
          z-index: 1;
        }
        
        .neat-icon.ni-label--duotone div:nth-child(3) {
          top: 50%;
          left: 50%;
          width: 50%;
          height: 50%;
          background: var(--color-secondary);
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-right-width: 0;
          border-top-left-radius: calc(var(--icon-size) / 16);
          border-bottom-left-radius: calc(var(--icon-size) / 16);
          transform: translate(-75%, -50%);
          z-index: 2;
        }
        
        /* @Name: launch */
        /* @Category: navigation, interface */
        /* @Aliases: open, external */
        
        /* ALL */
        
        .neat-icon.ni-launch--filled div:nth-child(1),
        .neat-icon.ni-launch--outline div:nth-child(1),
        .neat-icon.ni-launch--duotone div:nth-child(1) {
          top: 6.25%;
          left: 28.125%;
          width: 62.5%;
          height: 6.25%;
          transform-origin: center right;
          transform: rotate(-45deg);
          background: var(--color-primary);
          border: none;
        }
        
        .neat-icon.ni-launch--filled div:nth-child(2),
        .neat-icon.ni-launch--outline div:nth-child(2),
        .neat-icon.ni-launch--duotone div:nth-child(2) {
          top: 6.25%;
          left: 62.5%;
          width: 31.25%;
          height: 6.25%;
          background: var(--color-primary);
          border: none;
        }
        
        .neat-icon.ni-launch--filled div:nth-child(3),
        .neat-icon.ni-launch--outline div:nth-child(3),
        .neat-icon.ni-launch--duotone div:nth-child(3) {
          top: 50%;
          left: 50%;
          width: 87.5%;
          height: 87.5%;
          background: transparent;
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-top-width: 0;
          border-right-width: 0;
          border-radius: calc(var(--icon-size) / 16);
          transform: translate(-50%, -50%);
        }
        
        .neat-icon.ni-launch--filled div:nth-child(3)::before,
        .neat-icon.ni-launch--outline div:nth-child(3)::before,
        .neat-icon.ni-launch--duotone div:nth-child(3)::before {
          content: '';
          top: 0;
          left: 0;
          width: 37.5%;
          height: calc(var(--icon-size) / 16);
          background: var(--color-primary);
        }
        
        .neat-icon.ni-launch--filled div:nth-child(3)::after,
        .neat-icon.ni-launch--outline div:nth-child(3)::after,
        .neat-icon.ni-launch--duotone div:nth-child(3)::after {
          content: '';
          top: calc(100% - var(--icon-size) / 16);
          left: calc(62.5% - var(--icon-size) / 16);
          width: 37.5%;
          height: calc(var(--icon-size) / 16);
          background: var(--color-primary);
          transform-origin: bottom right;
          transform: rotate(90deg);
        }
        
        .neat-icon.ni-launch--filled div:nth-child(4),
        .neat-icon.ni-launch--outline div:nth-child(4),
        .neat-icon.ni-launch--duotone div:nth-child(4) {
          top: 6.25%;
          left: 56.25%;
          width: 31.25%;
          height: 6.25%;
          background: var(--color-primary);
          border: none;
          transform-origin: top right;
          transform: rotate(-90deg);
        }
        
        /* @Name: loader circle spinning */
        /* @Category: loaders, spinners */
        /* @Aliases: spinner */
        
        
        /* ALL */
        
        .neat-icon.ni-loader-circle-spinning--filled div:nth-child(1),
        .neat-icon.ni-loader-circle-spinning--outline div:nth-child(1),
        .neat-icon.ni-loader-circle-spinning--duotone div:nth-child(1),
        .neat-icon.ni-loader-circle-spinning--filled div:nth-child(2),
        .neat-icon.ni-loader-circle-spinning--outline div:nth-child(2),
        .neat-icon.ni-loader-circle-spinning--duotone div:nth-child(2),
        .neat-icon.ni-loader-circle-spinning--filled div:nth-child(4),
        .neat-icon.ni-loader-circle-spinning--outline div:nth-child(4),
        .neat-icon.ni-loader-circle-spinning--duotone div:nth-child(4) {
          top: 50%;
          left: 50%;
          width: 12.5%;
          height: 12.5%;
          background: transparent;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }
        
        .neat-icon.ni-loader-circle-spinning--filled div:nth-child(3),
        .neat-icon.ni-loader-circle-spinning--outline div:nth-child(3),
        .neat-icon.ni-loader-circle-spinning--duotone div:nth-child(3) {
          top: 50%;
          left: 50%;
          width: 87.5%;
          height: 87.5%;
          background: transparent;
          border: calc(var(--icon-size) / 16) solid var(--color-secondary);
          border-radius: 50%;
          border-top-color: var(--color-primary);
          transform: translate(-50%, -50%);
          animation: spinning 1s ease-in-out infinite;
        }
        
        @keyframes spinning {
          0% {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          100%{
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
        
        /* @Name: loader clock ticking */
        /* @Category: loaders, spinners */
        /* @Aliases: spinner, clock, time */
        
        
        /* Minute arrow */
        .neat-icon.ni-loader-clock-ticking--filled div:nth-child(1),
        .neat-icon.ni-loader-clock-ticking--outline div:nth-child(1),
        .neat-icon.ni-loader-clock-ticking--duotone div:nth-child(1) {
          top: 46.875%;
          left: 46.875%;
          width: 28%;
          height: calc(var(--icon-size) / 16);
          background: var(--color-primary);
          border: none;
          border-top-left-radius: calc(var(--icon-size) / 16);
          border-bottom-left-radius: calc(var(--icon-size) / 16);
          transform-origin: calc(var(--icon-size) / 32) calc(var(--icon-size) / 32);
          transform: translate(calc(var(--icon-size) / -32), -50%);
          z-index: 2;
          animation: fast-arrow 2s linear infinite;
        }
        
        /* Empty dot */
        .neat-icon.ni-loader-clock-ticking--filled div:nth-child(2),
        .neat-icon.ni-loader-clock-ticking--outline div:nth-child(2),
        .neat-icon.ni-loader-clock-ticking--duotone div:nth-child(2) {
          top: 50%;
          left: 50%;
          width: 12.5%;
          height: 12.5%;
          background: transparent;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }
        
        /* Circle body */
        .neat-icon.ni-loader-clock-ticking--filled div:nth-child(3),
        .neat-icon.ni-loader-clock-ticking--outline div:nth-child(3) {
          top: 50%;
          left: 50%;
          width: 75%;
          height: 75%;
          transform: translate(-50%, -50%);
          background: transparent;
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-radius: 50%;
          z-index: 1;
        }
        
        /* Hour arrow */
        .neat-icon.ni-loader-clock-ticking--filled div:nth-child(4),
        .neat-icon.ni-loader-clock-ticking--outline div:nth-child(4),
        .neat-icon.ni-loader-clock-ticking--duotone div:nth-child(4) {
          top: 46.875%;
          left: 46.875%;
          width: 21.5%;
          height: calc(var(--icon-size) / 16);;
          background: var(--color-primary);
          border: none;
          border-top-left-radius: calc(var(--icon-size) / 16);
          border-bottom-left-radius: calc(var(--icon-size) / 16);
          transform-origin: calc(var(--icon-size) / 32) calc(var(--icon-size) / 32);
          transform: translate(calc(var(--icon-size) / -32), -50%) rotate(24deg);
          z-index: 2;
          animation: slow-arrow 8s linear infinite;
        }
        
        /* DUOTONE */
        
        .neat-icon.ni-loader-clock-ticking--duotone div:nth-child(3) {
          top: 50%;
          left: 50%;
          width: 75%;
          height: 75%;
          transform: translate(-50%, -50%);
          background: var(--color-secondary);
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-radius: 50%;
          z-index: 1;
        }
        
        @keyframes slow-arrow {
          0% {
            transform:rotate(0deg)
          }
          100% {
            transform:rotate(360deg)
          }
        }
        @keyframes fast-arrow {
          0% {
            transform:rotate(0deg)
          }
          100% {
            transform:rotate(360deg)
          }
        }
        
        /* @Name: loader dots blinking */
        /* @Category: loaders, spinners */
        /* @Aliases: spinner */
        
        
        /* ALL */
        
        .neat-icon.ni-loader-dots-blinking--filled div:nth-child(1),
        .neat-icon.ni-loader-dots-blinking--outline div:nth-child(1),
        .neat-icon.ni-loader-dots-blinking--duotone div:nth-child(1),
        .neat-icon.ni-loader-dots-blinking--filled div:nth-child(4),
        .neat-icon.ni-loader-dots-blinking--outline div:nth-child(4),
        .neat-icon.ni-loader-dots-blinking--duotone div:nth-child(4) {
          top: 50%;
          left: 50%;
          width: 12.5%;
          height: 12.5%;
          transform: translate(-50%, -50%);
          background: var(--color-primary);
          border: none;
          border-radius: 50%;
          animation: dots-blinking 1.2s linear infinite;
          animation-delay: .2s;
        }
        
        .neat-icon.ni-loader-dots-blinking--filled div:nth-child(2),
        .neat-icon.ni-loader-dots-blinking--outline div:nth-child(2),
        .neat-icon.ni-loader-dots-blinking--duotone div:nth-child(2) {
          top: 50%;
          left: 25%;
          width: 12.5%;
          height: 12.5%;
          transform: translate(-50%, -50%);
          background: var(--color-primary);
          border: none;
          border-radius: 50%;
          animation: dots-blinking 1.2s linear infinite;
        }
        
        .neat-icon.ni-loader-dots-blinking--filled div:nth-child(3),
        .neat-icon.ni-loader-dots-blinking--outline div:nth-child(3),
        .neat-icon.ni-loader-dots-blinking--duotone div:nth-child(3) {
          top: 50%;
          left: 75%;
          width: 12.5%;
          height: 12.5%;
          transform: translate(-50%, -50%);
          background: var(--color-primary);
          border: none;
          border-radius: 50%;
          animation: dots-blinking 1.2s linear infinite;
          animation-delay: .4s;
        }
        
        @keyframes dots-blinking {
          0% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1, 1);
          }
          50% {
            opacity: .25;
            transform: translate(-50%, -50%) scale(.75, .75);
          }
          100% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1, 1);
          }
        }
        
        /* @Name: loader dots bouncing */
        /* @Category: loaders, spinners */
        /* @Aliases: spinner */
        
        
        /* ALL */
        
        .neat-icon.ni-loader-dots-bouncing--filled div:nth-child(1),
        .neat-icon.ni-loader-dots-bouncing--outline div:nth-child(1),
        .neat-icon.ni-loader-dots-bouncing--duotone div:nth-child(1),
        .neat-icon.ni-loader-dots-bouncing--filled div:nth-child(4),
        .neat-icon.ni-loader-dots-bouncing--outline div:nth-child(4),
        .neat-icon.ni-loader-dots-bouncing--duotone div:nth-child(4) {
          top: 50%;
          left: 50%;
          width: 12.5%;
          height: 12.5%;
          transform: translate(-50%, -50%);
          background: var(--color-primary);
          border: none;
          border-radius: 50%;
          animation: dots-bouncing 1.2s linear infinite;
          animation-delay: .2s;
        }
        
        .neat-icon.ni-loader-dots-bouncing--filled div:nth-child(2),
        .neat-icon.ni-loader-dots-bouncing--outline div:nth-child(2),
        .neat-icon.ni-loader-dots-bouncing--duotone div:nth-child(2) {
          top: 50%;
          left: 25%;
          width: 12.5%;
          height: 12.5%;
          transform: translate(-50%, -50%);
          background: var(--color-primary);
          border: none;
          border-radius: 50%;
          animation: dots-bouncing 1.2s linear infinite;
        }
        
        .neat-icon.ni-loader-dots-bouncing--filled div:nth-child(3),
        .neat-icon.ni-loader-dots-bouncing--outline div:nth-child(3),
        .neat-icon.ni-loader-dots-bouncing--duotone div:nth-child(3) {
          top: 50%;
          left: 75%;
          width: 12.5%;
          height: 12.5%;
          transform: translate(-50%, -50%);
          background: var(--color-primary);
          border: none;
          border-radius: 50%;
          animation: dots-bouncing 1.2s linear infinite;
          animation-delay: .4s;
        }
        
        @keyframes dots-bouncing {
          0% {
            opacity: 1;
            transform: translate(-50%, -50%);
          }
          25% {
            opacity: .25;
            transform: translate(-50%, -125%);
          }
          50% {
            opacity: 1;
            transform: translate(-50%, -50%);
          }
          75% {
            opacity: .25;
            transform: translate(-50%, 25%);
          }
        }
        
        /* @Name: location pin */
        /* @Category: maps, interface */
        /* @Aliases: place, geo, geopin */
        
        
        /* FILLED */
        
        .neat-icon.ni-location-pin--filled div:nth-child(1) {
          top: 37.5%;
          left: 50%;
          width: 18.75%;
          height: 18.75%;
          background: white;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          z-index: 2;
        }
        
        .neat-icon.ni-location-pin--filled div:nth-child(3) {
          top: 12.5%;
          left: 50%;
          width: 62.5%;
          height: 62.5%;
          background: var(--color-primary);
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-radius: 100% 100% 100% 0;
          transform: translateX(-50%) rotate(-45deg);
          z-index: 1;
        }
        
        /* OUTLINE */
        
        .neat-icon.ni-location-pin--outline div:nth-child(1),
        .neat-icon.ni-location-pin--duotone div:nth-child(1) {
          top: 37.5%;
          left: 50%;
          width: 18.75%;
          height: 18.75%;
          background: var(--color-primary);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          z-index: 2;
        }
        
        .neat-icon.ni-location-pin--outline div:nth-child(3) {
          top: 12.5%;
          left: 50%;
          width: 62.5%;
          height: 62.5%;
          background: transparent;
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-radius: 100% 100% 100% 0;
          transform: translateX(-50%) rotate(-45deg);
          z-index: 1;
        }
        
        /* DUOTONE */
        
        .neat-icon.ni-location-pin--duotone div:nth-child(3) {
          top: 12.5%;
          left: 50%;
          width: 62.5%;
          height: 62.5%;
          background: var(--color-secondary);
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-radius: 100% 100% 100% 0;
          transform: translateX(-50%) rotate(-45deg);
          z-index: 1;
        }
        
        /* @Name: login */
        /* @Category: interface, navigation */
        /* @Aliases: enter, door */
        
        
        /* ALL */
        
        .neat-icon.ni-login--filled div:nth-child(1),
        .neat-icon.ni-login--outline div:nth-child(1),
        .neat-icon.ni-login--duotone div:nth-child(1) {
          top: 50%;
          left: 6.25%;
          width: 56.25%;
          height: 6.25%;
          transform: translateY(-50%) rotate(180deg);
          background: var(--color-primary);
          border: none;
        }
        
        .neat-icon.ni-login--filled div:nth-child(2),
        .neat-icon.ni-login--outline div:nth-child(2),
        .neat-icon.ni-login--duotone div:nth-child(2) {
          top: 50%;
          left: 37.5%;
          width: 25%;
          height: 6.25%;
          transform-origin: bottom right;
          transform: translateY(-30%) rotate(45deg);
          background: var(--color-primary);
          border: none;
        }
        
        .neat-icon.ni-login--filled div:nth-child(3),
        .neat-icon.ni-login--outline div:nth-child(3),
        .neat-icon.ni-login--duotone div:nth-child(3) {
          top: 50%;
          left: 50%;
          width: 87.5%;
          height: 87.5%;
          background: transparent;
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-left-width: 0;
          border-radius: calc(var(--icon-size) / 16);
          transform: translate(-50%, -50%);
        }
        
        .neat-icon.ni-login--filled div:nth-child(3)::before,
        .neat-icon.ni-login--outline div:nth-child(3)::before,
        .neat-icon.ni-login--duotone div:nth-child(3)::before {
          content: '';
          top: 0;
          left: calc(var(--icon-size) / 16);
          width: 25%;
          height: calc(var(--icon-size) / 16);
          background: var(--color-primary);
          transform-origin: top left;
          transform: rotate(90deg);
        }
        
        .neat-icon.ni-login--filled div:nth-child(3)::after,
        .neat-icon.ni-login--outline div:nth-child(3)::after,
        .neat-icon.ni-login--duotone div:nth-child(3)::after {
          content: '';
          top: calc(100% - calc(var(--icon-size) / 16));
          left: calc(var(--icon-size) / 16);
          width: 25%;
          height: calc(var(--icon-size) / 16);
          background: var(--color-primary);
          transform-origin: bottom left;
          transform: rotate(-90deg);
        }
        
        .neat-icon.ni-login--filled div:nth-child(4),
        .neat-icon.ni-login--outline div:nth-child(4),
        .neat-icon.ni-login--duotone div:nth-child(4) {
          top: 50%;
          left: 37.5%;
          width: 25%;
          height: 6.25%;
          transform-origin: top right;
          transform: translateY(-70%) rotate(-45deg);
          background: var(--color-primary);
          border: none;
        }
        
        /* @Name: message attention */
        /* @Category: notifications */
        /* @Aliases: warning, danger, bubble */
        
        
        /* FILLED */
        
        .neat-icon.ni-message-attention--filled div:nth-child(1) {
          top: 50%;
          left: 6.25%;
          width: 25%;
          height: 31.25%;
          background: var(--color-primary);
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          transform: skewY(-45deg);
          z-index: 1;
        }
        
        .neat-icon.ni-message-attention--filled div:nth-child(2) {
          top: 34.5%;
          left: 50%;
          width: 25%;
          height: calc(var(--icon-size) / 16);
          background: white;
          border: none;
          transform: translate(-50%, -50%) rotate(-90deg);
          z-index: 3;
        }
        
        .neat-icon.ni-message-attention--filled div:nth-child(2)::before {
          content: '';
          top: 0;
          left: -50%;
          width: calc(var(--icon-size) / 16);
          height: calc(var(--icon-size) / 16);
          background: white;
          border: none;
          z-index: 3;
        }
        
        
        .neat-icon.ni-message-attention--filled div:nth-child(3) {
          top: 6.25%;
          left: 50%;
          width: 87.5%;
          height: 62.5%;
          transform: translateX(-50%);
          background: var(--color-primary);
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-radius: calc(var(--icon-size) / 16);
          border-bottom: none;
          border-bottom-right-radius: 0;
          z-index: 2;
        }
        
        .neat-icon.ni-message-attention--filled div:nth-child(4),
        .neat-icon.ni-message-attention--duotone div:nth-child(4) {
          top: 68.75%;
          left: 25%;
          width: 68.75%;
          height: calc(var(--icon-size) / 16);
          background: var(--color-primary);
          border-radius: none;
          border-bottom-right-radius: calc(var(--icon-size) / 16);
          z-index: 3;
        }
        
        /* OUTLINE */
        
        .neat-icon.ni-message-attention--outline div:nth-child(2),
        .neat-icon.ni-message-attention--duotone div:nth-child(2) {
          top: 34.5%;
          left: 50%;
          width: 25%;
          height: calc(var(--icon-size) / 16);
          background: var(--color-primary);
          border: none;
          transform: translate(-50%, -50%) rotate(-90deg);
          z-index: 3;
        }
        
        .neat-icon.ni-message-attention--outline div:nth-child(2)::before,
        .neat-icon.ni-message-attention--duotone div:nth-child(2)::before {
          content: '';
          top: 0;
          left: -50%;
          width: calc(var(--icon-size) / 16);
          height: calc(var(--icon-size) / 16);
          background: var(--color-primary);
          border: none;
          z-index: 3;
        }
        
        .neat-icon.ni-message-attention--outline div:nth-child(3) {
          top: 6.25%;
          left: 50%;
          width: 87.5%;
          height: 68.75%;
          transform: translateX(-50%);
          background: transparent;
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-bottom: none;
          border-radius: calc(var(--icon-size) / 16);
          border-bottom-left-radius: 0;
        }
        
        .neat-icon.ni-message-attention--outline div:nth-child(3)::after {
          content: '';
          top: 80%;
          left: 0;
          width: 32.75%;
          height: calc(var(--icon-size) / 16);
          background: var(--color-primary);
          border-radius: none;
          transform-origin: top left;
          transform: rotate(90deg) skewX(45deg);
        }
        
        .neat-icon.ni-message-attention--outline div:nth-child(4) {
          top: 68.75%;
          left: 25%;
          width: 68.75%;
          height: calc(var(--icon-size) / 16);
          background: var(--color-primary);
          border-radius: none;
          border-bottom-right-radius: calc(var(--icon-size) / 16);
        }
        
        .neat-icon.ni-message-attention--outline div:nth-child(4)::before {
          content: '';
          top: 0;
          left: 0;
          width: 37.5%;
          height: calc(var(--icon-size) / 20);
          background: var(--color-primary);
          border-radius: none;
          transform-origin: center left;
          transform: rotate(135deg) skewX(-45deg);
        }
        
        /* DUOTONE */
        
        .neat-icon.ni-message-attention--duotone div:nth-child(1) {
          top: 50%;
          left: 6.25%;
          width: 25%;
          height: 31.25%;
          background: var(--color-secondary);
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          transform: skewY(-45deg);
          z-index: 1;
        }
        
        .neat-icon.ni-message-attention--duotone div:nth-child(3) {
          top: 6.25%;
          left: 50%;
          width: 87.5%;
          height: 62.5%;
          transform: translateX(-50%);
          background: var(--color-secondary);
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-radius: calc(var(--icon-size) / 16);
          border-bottom: none;
          border-bottom-right-radius: 0;
          z-index: 2;
        }
        
        /* @Name: message blank */
        /* @Category: notifications */
        /* @Aliases: chat, bubble, dialog */
        
        
        /* FILLED */
        
        .neat-icon.ni-message-blank--filled div:nth-child(1) {
          top: 50%;
          left: 6.25%;
          width: 25%;
          height: 31.25%;
          background: var(--color-primary);
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          transform: skewY(-45deg);
          z-index: 1;
        }
        
        .neat-icon.ni-message-blank--filled div:nth-child(2),
        .neat-icon.ni-message-blank--outline div:nth-child(2),
        .neat-icon.ni-message-blank--duotone div:nth-child(2) {
          top: 50%;
          left: 50%;
          width: 12.5%;
          height: 12.5%;
          background: transparent;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }
        
        
        .neat-icon.ni-message-blank--filled div:nth-child(3) {
          top: 6.25%;
          left: 50%;
          width: 87.5%;
          height: 62.5%;
          transform: translateX(-50%);
          background: var(--color-primary);
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-radius: calc(var(--icon-size) / 16);
          border-bottom: none;
          border-bottom-right-radius: 0;
          z-index: 2;
        }
        
        .neat-icon.ni-message-blank--filled div:nth-child(4),
        .neat-icon.ni-message-blank--duotone div:nth-child(4) {
          top: 68.75%;
          left: 25%;
          width: 68.75%;
          height: calc(var(--icon-size) / 16);
          background: var(--color-primary);
          border-radius: none;
          border-bottom-right-radius: calc(var(--icon-size) / 16);
          z-index: 3;
        }
        
        /* OUTLINE */
        
        .neat-icon.ni-message-blank--outline div:nth-child(3) {
          top: 6.25%;
          left: 50%;
          width: 87.5%;
          height: 68.75%;
          transform: translateX(-50%);
          background: transparent;
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-bottom: none;
          border-radius: calc(var(--icon-size) / 16);
          border-bottom-left-radius: 0;
        }
        
        .neat-icon.ni-message-blank--outline div:nth-child(3)::after {
          content: '';
          top: 80%;
          left: 0;
          width: 32.75%;
          height: calc(var(--icon-size) / 16);
          background: var(--color-primary);
          border-radius: none;
          transform-origin: top left;
          transform: rotate(90deg) skewX(45deg);
        }
        
        .neat-icon.ni-message-blank--outline div:nth-child(4) {
          top: 68.75%;
          left: 25%;
          width: 68.75%;
          height: calc(var(--icon-size) / 16);
          background: var(--color-primary);
          border-radius: none;
          border-bottom-right-radius: calc(var(--icon-size) / 16);
        }
        
        .neat-icon.ni-message-blank--outline div:nth-child(4)::before {
          content: '';
          top: 0;
          left: 0;
          width: 37.5%;
          height: calc(var(--icon-size) / 20);
          background: var(--color-primary);
          border-radius: none;
          transform-origin: center left;
          transform: rotate(135deg) skewX(-45deg);
        }
        
        /* DUOTONE */
        
        .neat-icon.ni-message-blank--duotone div:nth-child(1) {
          top: 50%;
          left: 6.25%;
          width: 25%;
          height: 31.25%;
          background: var(--color-secondary);
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          transform: skewY(-45deg);
          z-index: 1;
        }
        
        .neat-icon.ni-message-blank--duotone div:nth-child(3) {
          top: 6.25%;
          left: 50%;
          width: 87.5%;
          height: 62.5%;
          transform: translateX(-50%);
          background: var(--color-secondary);
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-radius: calc(var(--icon-size) / 16);
          border-bottom: none;
          border-bottom-right-radius: 0;
          z-index: 2;
        }
        
        /* @Name: message comment */
        /* @Category: notifications */
        /* @Aliases: text, chat, email, notification, write */
        
        
        /* FILLED */
        
        .neat-icon.ni-message-comment--filled div:nth-child(1) {
          top: 50%;
          left: 6.25%;
          width: 25%;
          height: 31.25%;
          background: var(--color-primary);
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          transform: skewY(-45deg);
          z-index: 1;
        }
        
        .neat-icon.ni-message-comment--filled div:nth-child(2) {
          top: 40.5%;
          left: 50%;
          width: 62.5%;
          height: calc(var(--icon-size) / 16);
          background: white;
          border: none;
          transform: translate(-50%, -50%);
          z-index: 3;
        }
        
        .neat-icon.ni-message-comment--filled div:nth-child(2)::before {
          content: '';
          top: -225%;
          left: 0;
          width: 100%;
          height: calc(var(--icon-size) / 16);
          background: white;
          border: none;
          z-index: 3;
        }
        
        .neat-icon.ni-message-comment--filled div:nth-child(2)::after {
          content: '';
          top: 225%;
          left: 0;
          width: 100%;
          height: calc(var(--icon-size) / 16);
          background: white;
          border: none;
          z-index: 3;
        }
        
        
        .neat-icon.ni-message-comment--filled div:nth-child(3) {
          top: 6.25%;
          left: 50%;
          width: 87.5%;
          height: 62.5%;
          transform: translateX(-50%);
          background: var(--color-primary);
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-radius: calc(var(--icon-size) / 16);
          border-bottom: none;
          border-bottom-right-radius: 0;
          z-index: 2;
        }
        
        .neat-icon.ni-message-comment--filled div:nth-child(4),
        .neat-icon.ni-message-comment--duotone div:nth-child(4) {
          top: 68.75%;
          left: 25%;
          width: 68.75%;
          height: calc(var(--icon-size) / 16);
          background: var(--color-primary);
          border-radius: none;
          border-bottom-right-radius: calc(var(--icon-size) / 16);
          z-index: 3;
        }
        
        /* OUTLINE */
        
        .neat-icon.ni-message-comment--outline div:nth-child(2),
        .neat-icon.ni-message-comment--duotone div:nth-child(2) {
          top: 40.5%;
          left: 50%;
          width: 62.5%;
          height: calc(var(--icon-size) / 16);
          background: var(--color-primary);
          border: none;
          transform: translate(-50%, -50%);
          z-index: 3;
        }
        
        .neat-icon.ni-message-comment--outline div:nth-child(2)::before,
        .neat-icon.ni-message-comment--duotone div:nth-child(2)::before {
          content: '';
          top: -225%;
          left: 0;
          width: 100%;
          height: calc(var(--icon-size) / 16);
          background: var(--color-primary);
          border: none;
          z-index: 3;
        }
        
        .neat-icon.ni-message-comment--outline div:nth-child(2)::after,
        .neat-icon.ni-message-comment--duotone div:nth-child(2)::after {
          content: '';
          top: 225%;
          left: 0;
          width: 100%;
          height: calc(var(--icon-size) / 16);
          background: var(--color-primary);
          border: none;
          z-index: 3;
        }
        
        .neat-icon.ni-message-comment--outline div:nth-child(3) {
          top: 6.25%;
          left: 50%;
          width: 87.5%;
          height: 68.75%;
          transform: translateX(-50%);
          background: transparent;
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-bottom: none;
          border-radius: calc(var(--icon-size) / 16);
          border-bottom-left-radius: 0;
        }
        
        .neat-icon.ni-message-comment--outline div:nth-child(3)::after {
          content: '';
          top: 80%;
          left: 0;
          width: 32.75%;
          height: calc(var(--icon-size) / 16);
          background: var(--color-primary);
          border-radius: none;
          transform-origin: top left;
          transform: rotate(90deg) skewX(45deg);
        }
        
        .neat-icon.ni-message-comment--outline div:nth-child(4) {
          top: 68.75%;
          left: 25%;
          width: 68.75%;
          height: calc(var(--icon-size) / 16);
          background: var(--color-primary);
          border-radius: none;
          border-bottom-right-radius: calc(var(--icon-size) / 16);
        }
        
        .neat-icon.ni-message-comment--outline div:nth-child(4)::before {
          content: '';
          top: 0;
          left: 0;
          width: 37.5%;
          height: calc(var(--icon-size) / 20);
          background: var(--color-primary);
          border-radius: none;
          transform-origin: center left;
          transform: rotate(135deg) skewX(-45deg);
        }
        
        /* DUOTONE */
        
        .neat-icon.ni-message-comment--duotone div:nth-child(1) {
          top: 50%;
          left: 6.25%;
          width: 25%;
          height: 31.25%;
          background: var(--color-secondary);
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          transform: skewY(-45deg);
          z-index: 1;
        }
        
        .neat-icon.ni-message-comment--duotone div:nth-child(3) {
          top: 6.25%;
          left: 50%;
          width: 87.5%;
          height: 62.5%;
          transform: translateX(-50%);
          background: var(--color-secondary);
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-radius: calc(var(--icon-size) / 16);
          border-bottom: none;
          border-bottom-right-radius: 0;
          z-index: 2;
        }
        
        /* @Name: notification */
        /* @Category: notifications */
        /* @Aliases: bell */
        
        
        /* FILLED */
        
        .neat-icon.ni-notification--filled div:nth-child(1),
        .neat-icon.ni-notification--outline div:nth-child(1),
        .neat-icon.ni-notification--duotone div:nth-child(1) {
          top: 6.25%;
          left: 50%;
          width: 12.5%;
          height: 12.5%;
          background: var(--color-primary);
          border: none;
          border-radius: 50%;
          transform: translateX(-50%);
          z-index: 1;
        }
        
        .neat-icon.ni-notification--filled div:nth-child(2),
        .neat-icon.ni-notification--outline div:nth-child(2),
        .neat-icon.ni-notification--duotone div:nth-child(2) {
          top: 50%;
          left: 50%;
          width: 12.5%;
          height: 12.5%;
          transform: translate(-50%, -50%);
          background: transparent;
          border: none;
        }
        
        .neat-icon.ni-notification--filled div:nth-child(3) {
          top: 31.25%;
          left: 50%;
          width: 43.75%;
          height: 28.25%;
          background: var(--color-primary);
          border: calc(var(--icon-size) / 16) solid;
          border-top-color: transparent;
          border-bottom-color: transparent;
          border-bottom-width: 0;
          border-left-color: var(--color-primary);
          border-right-color: var(--color-primary);
          transform: translateX(-50%);
          z-index: 2;
        }
        
        .neat-icon.ni-notification--filled div:nth-child(3)::before {
          content: '';
          top: -100%;
          left: 50%;
          width: calc(100% + var(--icon-size) / 8);
          height: calc(50% + var(--icon-size) / 8);
          background: var(--color-primary);
          border: calc(var(--icon-size) / 16) solid;
          border-top-color: var(--color-primary);
          border-bottom-color: transparent;
          border-bottom-width: 0;
          border-left-color: var(--color-primary);
          border-right-color: var(--color-primary);
          border-top-left-radius: 50%;
          border-top-right-radius: 50%;
          transform: translateX(-50%);
        }
        
        .neat-icon.ni-notification--filled div:nth-child(3)::after {
          content: '';
          top: 66%;
          left: 50%;
          width: calc(175% + var(--icon-size) / 8);
          height: calc(75% + var(--icon-size) / 8);
          background: var(--color-primary);
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-top-left-radius: 50%;
          border-top-right-radius: 50%;
          transform: translateX(-50%);
        }
        
        .neat-icon.ni-notification--filled div:nth-child(4) {
          top: 65.5%;
          left: 50%;
          width: 25%;
          height: 25%;
          background: var(--color-primary);
          border: calc(var(--icon-size) / 16) solid;
          border-top-color: transparent;
          border-left-color: transparent;
          border-bottom-color: var(--color-primary);
          border-right-color: var(--color-primary);
          border-radius: 50%;
          transform: translateX(-50%) rotate(45deg);
          z-index: 1;
        }
        
        /* OUTLINE */
        
        .neat-icon.ni-notification--outline div:nth-child(3) {
          top: 31.25%;
          left: 50%;
          width: 43.75%;
          height: 28.25%;
          background: transparent;
          border: calc(var(--icon-size) / 16) solid;
          border-top-color: transparent;
          border-bottom-color: transparent;
          border-bottom-width: 0;
          border-left-color: var(--color-primary);
          border-right-color: var(--color-primary);
          transform: translateX(-50%);
          z-index: 2;
        }
        
        .neat-icon.ni-notification--outline div:nth-child(3)::before {
          content: '';
          top: -100%;
          left: 50%;
          width: calc(100% + var(--icon-size) / 8);
          height: calc(50% + var(--icon-size) / 8);
          background: transparent;
          border: calc(var(--icon-size) / 16) solid;
          border-top-color: var(--color-primary);
          border-bottom-color: transparent;
          border-bottom-width: 0;
          border-left-color: var(--color-primary);
          border-right-color: var(--color-primary);
          border-top-left-radius: 50%;
          border-top-right-radius: 50%;
          transform: translateX(-50%);
        }
        
        .neat-icon.ni-notification--outline div:nth-child(3)::after {
          content: '';
          top: 66%;
          left: 50%;
          width: calc(175% + var(--icon-size) / 8);
          height: calc(75% + var(--icon-size) / 8);
          background: transparent;
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-top-left-radius: 50%;
          border-top-right-radius: 50%;
          transform: translateX(-50%);
        }
        
        .neat-icon.ni-notification--outline div:nth-child(4) {
          top: 65.5%;
          left: 50%;
          width: 25%;
          height: 25%;
          background: transparent;
          border: calc(var(--icon-size) / 16) solid;
          border-top-color: transparent;
          border-left-color: transparent;
          border-bottom-color: var(--color-primary);
          border-right-color: var(--color-primary);
          border-radius: 50%;
          transform: translateX(-50%) rotate(45deg);
          z-index: 1;
        }
        
        /* DUOTONE */
        
        .neat-icon.ni-notification--duotone div:nth-child(3) {
          top: 31.25%;
          left: 50%;
          width: 43.75%;
          height: 28.25%;
          background: var(--color-secondary);
          border: calc(var(--icon-size) / 16) solid;
          border-top-color: transparent;
          border-bottom-color: transparent;
          border-bottom-width: 0;
          border-left-color: var(--color-primary);
          border-right-color: var(--color-primary);
          transform: translateX(-50%);
          z-index: 2;
        }
        
        .neat-icon.ni-notification--duotone div:nth-child(3)::before {
          content: '';
          top: -100%;
          left: 50%;
          width: calc(100% + var(--icon-size) / 8);
          height: calc(50% + var(--icon-size) / 8);
          background: var(--color-secondary);
          border: calc(var(--icon-size) / 16) solid;
          border-top-color: var(--color-primary);
          border-bottom-color: transparent;
          border-bottom-width: 0;
          border-left-color: var(--color-primary);
          border-right-color: var(--color-primary);
          border-top-left-radius: 50%;
          border-top-right-radius: 50%;
          transform: translateX(-50%);
        }
        
        .neat-icon.ni-notification--duotone div:nth-child(3)::after {
          content: '';
          top: 66%;
          left: 50%;
          width: calc(175% + var(--icon-size) / 8);
          height: calc(75% + var(--icon-size) / 8);
          background: var(--color-secondary);
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-top-left-radius: 50%;
          border-top-right-radius: 50%;
          transform: translateX(-50%);
        }
        
        .neat-icon.ni-notification--duotone div:nth-child(4) {
          top: 65.5%;
          left: 50%;
          width: 25%;
          height: 25%;
          background: var(--color-secondary);
          border: calc(var(--icon-size) / 16) solid;
          border-top-color: transparent;
          border-left-color: transparent;
          border-bottom-color: var(--color-primary);
          border-right-color: var(--color-primary);
          border-radius: 50%;
          transform: translateX(-50%) rotate(45deg);
          z-index: 1;
        }
        
        /* @Name: print */
        /* @Category: interface */
        /* @Aliases: printer, paper */
        
        
        /* FILLED */
        
        .neat-icon.ni-print--filled div:nth-child(1) {
          top: 12.5%;
          left: 50%;
          width: 50%;
          height: 21.875%;
          background: var(--color-primary);
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          transform: translateX(-50%);
        }
        
        .neat-icon.ni-print--filled div:nth-child(2) {
          top: 37.5%;
          left: 50%;
          width: 81.25%;
          height: 25%;
          background: var(--color-primary);
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-bottom-width: 0;
          border-top-left-radius: calc(var(--icon-size) / 8);
          border-top-right-radius: calc(var(--icon-size) / 8);
          transform: translateX(-50%);
        }
        
        .neat-icon.ni-print--filled div:nth-child(2)::before,
        .neat-icon.ni-print--outline div:nth-child(2)::before,
        .neat-icon.ni-print--duotone div:nth-child(2)::before {
          content: '';
          top: 100%;
          left: calc(var(--icon-size) / -16);
          width: 25%;
          height: calc(var(--icon-size) / 16);
          background: var(--color-primary);
          border: none;
        }
        
        .neat-icon.ni-print--filled div:nth-child(2)::after,
        .neat-icon.ni-print--outline div:nth-child(2)::after,
        .neat-icon.ni-print--duotone div:nth-child(2)::after {
          content: '';
          top: 100%;
          right: calc(var(--icon-size) / -16);
          width: 25%;
          height: calc(var(--icon-size) / 16);
          background: var(--color-primary);
          border: none;
        }
        
        .neat-icon.ni-print--filled div:nth-child(3) {
          top: 50%;
          left: 75%;
          width: 6.25%;
          height: 6.25%;
          background: white;
          border-radius: 50%;
        }
        
        .neat-icon.ni-print--filled div:nth-child(4),
        .neat-icon.ni-print--outline div:nth-child(4),
        .neat-icon.ni-print--duotone div:nth-child(4) {
          top: 56.25%;
          left: 50%;
          width: 50%;
          height: 31.25%;
          background: transparent;
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          transform: translateX(-50%);
        }
        
        /* OUTLINE */
        
        .neat-icon.ni-print--outline div:nth-child(1) {
          top: 12.5%;
          left: 50%;
          width: 50%;
          height: 31.25%;
          background: transparent;
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          transform: translateX(-50%);
        }
        
        .neat-icon.ni-print--outline div:nth-child(2) {
          top: 37.5%;
          left: 50%;
          width: 81.25%;
          height: 25%;
          background: transparent;
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-bottom-width: 0;
          border-top-left-radius: calc(var(--icon-size) / 8);
          border-top-right-radius: calc(var(--icon-size) / 8);
          transform: translateX(-50%);
        }
        
        .neat-icon.ni-print--outline div:nth-child(3),
        .neat-icon.ni-print--duotone div:nth-child(3) {
          top: 50%;
          left: 75%;
          width: 6.25%;
          height: 6.25%;
          background: var(--color-primary);
          border-radius: 50%;
        }
        
        /* DUOTONE */
        
        .neat-icon.ni-print--duotone div:nth-child(1) {
          top: 12.5%;
          left: 50%;
          width: 50%;
          height: 31.25%;
          background: var(--color-secondary);
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          transform: translateX(-50%);
        }
        
        .neat-icon.ni-print--duotone div:nth-child(2) {
          top: 37.5%;
          left: 50%;
          width: 81.25%;
          height: 25%;
          background: var(--color-secondary);
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-bottom-width: 0;
          border-top-left-radius: calc(var(--icon-size) / 8);
          border-top-right-radius: calc(var(--icon-size) / 8);
          transform: translateX(-50%);
        }
        
        /* @Name: problem report */
        /* @Category: notifications */
        /* @Aliases: warning, danger, stop, bug */
        
        
        /* FILLED */
        
        .neat-icon.ni-problem-report--filled div:nth-child(1),
        .neat-icon.ni-problem-report--filled div:nth-child(4) {
          top: 50%;
          left: 50%;
          width: 12.5%;
          height: 12.5%;
          transform: translate(-50%, -50%);
          background: transparent;
          border: none;
        }
        
        .neat-icon.ni-problem-report--filled div:nth-child(2) {
          top: 43.5%;
          left: 50%;
          width: 25%;
          height: calc(var(--icon-size) / 16);
          background: white;
          border: none;
          transform: translate(-50%, -50%) rotate(-90deg);
          z-index: 3;
        }
        
        .neat-icon.ni-problem-report--filled div:nth-child(2)::before {
          content: '';
          top: 0;
          left: -50%;
          width: calc(var(--icon-size) / 16);
          height: calc(var(--icon-size) / 16);
          background: white;
          border: none;
          border-radius: 50%;
          z-index: 3;
        }
        
        .neat-icon.ni-problem-report--filled div:nth-child(3),
        .neat-icon.ni-problem-report--duotone div:nth-child(3) {
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: transparent;
          border: none;
          z-index: 1;
        }
        
        .neat-icon.ni-problem-report--filled div:nth-child(3)::after {
          content: '${String.fromCodePoint(0x2B22)}';
          top: 50%;
          left: 55%;
          color: var(--color-primary);
          font-size: var(--icon-size);
          transform: translate(-50%, -50%) rotate(90deg);
        }
        
        /* OUTLINE */
        
        .neat-icon.ni-problem-report--outline div:nth-child(1),
        .neat-icon.ni-problem-report--duotone div:nth-child(1) {
          top: 12.5%;
          left: 50%;
          width: 43.75%;
          height: calc(var(--icon-size) / 16);
          transform: translateX(-50%);
          background: var(--color-primary);
          border: none;
          z-index: 2;
        }
        
        .neat-icon.ni-problem-report--outline div:nth-child(1)::before,
        .neat-icon.ni-problem-report--duotone div:nth-child(1)::before {
          content: '';
          top: 0;
          left: -100%;
          width: 100%;
          height: calc(var(--icon-size) / 16);
          background: var(--color-primary);
          border: none;
          transform-origin: top right;
          transform: rotate(-60deg);
        }
        
        .neat-icon.ni-problem-report--outline div:nth-child(1)::after,
        .neat-icon.ni-problem-report--duotone div:nth-child(1)::after {
          content: '';
          top: 0;
          left: 100%;
          width: 100%;
          height: calc(var(--icon-size) / 16);
          background: var(--color-primary);
          border: none;
          transform-origin: top left;
          transform: rotate(60deg);
        }
        
        .neat-icon.ni-problem-report--outline div:nth-child(2),
        .neat-icon.ni-problem-report--duotone div:nth-child(2) {
          top: 43.5%;
          left: 50%;
          width: 25%;
          height: calc(var(--icon-size) / 16);
          background: var(--color-primary);
          border: none;
          transform: translate(-50%, -50%) rotate(-90deg);
          z-index: 3;
        }
        
        .neat-icon.ni-problem-report--outline div:nth-child(2)::before,
        .neat-icon.ni-problem-report--duotone div:nth-child(2)::before {
          content: '';
          top: 0;
          left: -50%;
          width: calc(var(--icon-size) / 16);
          height: calc(var(--icon-size) / 16);
          background: var(--color-primary);
          border: none;
          border-radius: 50%;
          z-index: 3;
        }
        
        .neat-icon.ni-problem-report--outline div:nth-child(3) {
          top: 50%;
          left: 50%;
          width: 12.5%;
          height: 12.5%;
          transform: translate(-50%, -50%);
          background: transparent;
          border: none;
        }
        
        .neat-icon.ni-problem-report--outline div:nth-child(4),
        .neat-icon.ni-problem-report--duotone div:nth-child(4) {
          top: 81.25%;
          left: 50%;
          width: 43.75%;
          height: calc(var(--icon-size) / 16);
          transform: translateX(-50%);
          background: var(--color-primary);
          border: none;
          z-index: 2;
        }
        
        .neat-icon.ni-problem-report--outline div:nth-child(4)::before,
        .neat-icon.ni-problem-report--duotone div:nth-child(4)::before {
          content: '';
          top: 0;
          left: -100%;
          width: 100%;
          height: calc(var(--icon-size) / 16);
          background: var(--color-primary);
          border: none;
          transform-origin: bottom right;
          transform: rotate(60deg);
        }
        
        .neat-icon.ni-problem-report--outline div:nth-child(4)::after,
        .neat-icon.ni-problem-report--duotone div:nth-child(4)::after {
          content: '';
          top: 0;
          left: 100%;
          width: 100%;
          height: calc(var(--icon-size) / 16);
          background: var(--color-primary);
          border: none;
          transform-origin: bottom left;
          transform: rotate(-60deg);
          z-index: 1;
        }
        
        /* DUOTONE */
        
        .neat-icon.ni-problem-report--duotone div:nth-child(3)::before {
          content: '${String.fromCodePoint(0x2B22)}';
          top: 50%;
          left: 55%;
          color: var(--color-secondary);
          font-size: var(--icon-size);
          transform: translate(-50%, -50%) rotate(90deg);
        }
        
        /* @Name: problem warning */
        /* @Category: notifications */
        /* @Aliases: attention, danger, stop, bug */
        
        
        /* FILLED */
        
        .neat-icon.ni-problem-warning--filled div:nth-child(1),
        .neat-icon.ni-problem-warning--outline div:nth-child(1),
        .neat-icon.ni-problem-warning--duotone div:nth-child(1),
        .neat-icon.ni-problem-warning--filled div:nth-child(4),
        .neat-icon.ni-problem-warning--outline div:nth-child(4),
        .neat-icon.ni-problem-warning--duotone div:nth-child(4) {
          top: 50%;
          left: 50%;
          width: 12.5%;
          height: 12.5%;
          transform: translate(-50%, -50%);
          background: transparent;
          border: none;
        }
        
        .neat-icon.ni-problem-warning--filled div:nth-child(2) {
          top: 50%;
          left: 50%;
          width: 18.75%;
          height: calc(var(--icon-size) / 16);
          background: white;
          border: none;
          transform: translate(-50%, -50%) rotate(-90deg);
          z-index: 3;
        }
        
        .neat-icon.ni-problem-warning--filled div:nth-child(2)::before {
          content: '';
          top: 0;
          left: -50%;
          width: calc(var(--icon-size) / 16);
          height: calc(var(--icon-size) / 16);
          background: white;
          border: none;
          border-radius: 50%;
          z-index: 3;
        }
        
        .neat-icon.ni-problem-warning--filled div:nth-child(3),
        .neat-icon.ni-problem-warning--outline div:nth-child(3),
        .neat-icon.ni-problem-warning--duotone div:nth-child(3) {
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: transparent;
          border: none;
          z-index: 1;
        }
        
        .neat-icon.ni-problem-warning--filled div:nth-child(3)::after {
          content: '${String.fromCodePoint(0x25B2)}';
          top: 50%;
          left: 50%;
          color: var(--color-primary);
          font-size: var(--icon-size);
          transform: translate(-50%, -50%) scale(1.25, 1);
        }
        
        /* OUTLINE */
        
        .neat-icon.ni-problem-warning--outline div:nth-child(2),
        .neat-icon.ni-problem-warning--duotone div:nth-child(2) {
          top: 50%;
          left: 50%;
          width: 18.75%;
          height: calc(var(--icon-size) / 16);
          background: var(--color-primary);
          border: none;
          transform: translate(-50%, -50%) rotate(-90deg);
          z-index: 3;
        }
        
        .neat-icon.ni-problem-warning--outline div:nth-child(2)::before,
        .neat-icon.ni-problem-warning--duotone div:nth-child(2)::before {
          content: '';
          top: 0;
          left: -50%;
          width: calc(var(--icon-size) / 16);
          height: calc(var(--icon-size) / 16);
          background: var(--color-primary);
          border: none;
          border-radius: 50%;
          z-index: 3;
        }
        
        .neat-icon.ni-problem-warning--outline div:nth-child(3)::after {
          content: '${String.fromCodePoint(0x25B3)}';
          top: 50%;
          left: 50%;
          color: var(--color-primary);
          font-size: var(--icon-size);
          transform: translate(-50%, -50%) scale(.9, .8);
        }
        
        /* DUOTONE */
        
        .neat-icon.ni-problem-warning--duotone div:nth-child(3)::before {
          content: '${String.fromCodePoint(0x25B2)}';
          top: 50%;
          left: 50%;
          color: var(--color-primary);
          font-size: var(--icon-size);
          transform: translate(-50%, -50%) scale(1.25, 1);
        }
        
        .neat-icon.ni-problem-warning--duotone div:nth-child(3)::after {
          content: '${String.fromCodePoint(0x25B2)}';
          top: 51.5%;
          left: 50%;
          color: var(--color-secondary);
          font-size: calc(var(--icon-size) / 1.35);
          transform: translate(-50%, -50%) scale(1.25, 1);
        }
        
        /* @Name: redo */
        /* @Category: arrows, navigation, interface */
        /* @Aliases: forward, jump, next, arrow */
        
        
        /* ALL */
        
        .neat-icon.ni-redo--filled div:nth-child(1),
        .neat-icon.ni-redo--outline div:nth-child(1),
        .neat-icon.ni-redo--duotone div:nth-child(1),
        .neat-icon.ni-redo--filled div:nth-child(3),
        .neat-icon.ni-redo--outline div:nth-child(3),
        .neat-icon.ni-redo--duotone div:nth-child(3),
        .neat-icon.ni-redo--filled div:nth-child(4),
        .neat-icon.ni-redo--outline div:nth-child(4),
        .neat-icon.ni-redo--duotone div:nth-child(4) {
          top: 50%;
          left: 50%;
          width: 12.5%;
          height: 12.5%;
          background: transparent;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }
        
        .neat-icon.ni-redo--filled div:nth-child(2),
        .neat-icon.ni-redo--outline div:nth-child(2),
        .neat-icon.ni-redo--duotone div:nth-child(2) {
          top: 50%;
          left: 50%;
          width: 72.25%;
          height: 72.25%;
          transform: translate(-50%, -30%) rotate(40deg); 
          background: transparent;
          border: calc(var(--icon-size) / 16) solid;
          border-top-color: var(--color-primary);
          border-bottom-color: transparent;
          border-left-color: var(--color-primary);
          border-right-color: transparent;
          border-radius: 50%;
        }
        
        .neat-icon.ni-redo--filled div:nth-child(2)::after,
        .neat-icon.ni-redo--outline div:nth-child(2)::after,
        .neat-icon.ni-redo--duotone div:nth-child(2)::after {
          content: '${String.fromCodePoint(0x25B6)}';
          top: -6.25%;
          left: 75%;
          color: var(--color-primary);
          font-size: calc(var(--icon-size) / 4);
          transform: rotate(45deg);
        }
        
        /* @Name: reload */
        /* @Category: arrows, navigation, interface */
        /* @Aliases: forward, redo, repeat, arrow */
        
        
        /* ALL */
        
        .neat-icon.ni-reload--filled div:nth-child(1),
        .neat-icon.ni-reload--outline div:nth-child(1),
        .neat-icon.ni-reload--duotone div:nth-child(1),
        .neat-icon.ni-reload--filled div:nth-child(3),
        .neat-icon.ni-reload--outline div:nth-child(3),
        .neat-icon.ni-reload--duotone div:nth-child(3),
        .neat-icon.ni-reload--filled div:nth-child(4),
        .neat-icon.ni-reload--outline div:nth-child(4),
        .neat-icon.ni-reload--duotone div:nth-child(4) {
          top: 50%;
          left: 50%;
          width: 12.5%;
          height: 12.5%;
          background: transparent;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }
        
        .neat-icon.ni-reload--filled div:nth-child(2),
        .neat-icon.ni-reload--outline div:nth-child(2),
        .neat-icon.ni-reload--duotone div:nth-child(2) {
          top: 50%;
          left: 50%;
          width: 72.25%;
          height: 72.25%;
          transform: translate(-50%, -50%) rotate(15deg);
          background: transparent;
          border: calc(var(--icon-size) / 16) solid;
          border-top-color: var(--color-primary);
          border-bottom-color: var(--color-primary);
          border-left-color: var(--color-primary);
          border-right-color: transparent;
          border-radius: 50%;
        }
        
        .neat-icon.ni-reload--filled div:nth-child(2)::after,
        .neat-icon.ni-reload--outline div:nth-child(2)::after,
        .neat-icon.ni-reload--duotone div:nth-child(2)::after {
          content: '${String.fromCodePoint(0x25B6)}';
          top: -6.25%;
          left: 75%;
          color: var(--color-primary);
          font-size: calc(var(--icon-size) / 4);
          transform: rotate(45deg);
        }
        
        /* @Name: reorder */
        /* @Category: interface */
        /* @Aliases: burger, list, paragraph, order  */
        
        
        /* ALL */
        
        .neat-icon.ni-reorder--filled div:nth-child(1),
        .neat-icon.ni-reorder--outline div:nth-child(1),
        .neat-icon.ni-reorder--duotone div:nth-child(1) {
          top: 18.75%;
          left: 50%;
          width: 87.5%;
          height: 6.25%;
          transform: translateX(-50%);
          background: var(--color-primary);
          border: none;
          box-shadow: 0 calc(var(--icon-size) / 64) 0 var(--color-primary), 0 calc(var(--icon-size) / -64) 0 var(--color-primary);
        }
        
        .neat-icon.ni-reorder--filled div:nth-child(2),
        .neat-icon.ni-reorder--outline div:nth-child(2),
        .neat-icon.ni-reorder--duotone div:nth-child(2) {
          top: 37.5%;
          left: 50%;
          width: 87.5%;
          height: 6.25%;
          transform: translateX(-50%);
          background: var(--color-primary);
          border: none;
          box-shadow: 0 calc(var(--icon-size) / 64) 0 var(--color-primary), 0 calc(var(--icon-size) / -64) 0 var(--color-primary);
        }
        
        .neat-icon.ni-reorder--filled div:nth-child(3),
        .neat-icon.ni-reorder--outline div:nth-child(3),
        .neat-icon.ni-reorder--duotone div:nth-child(3) {
          top: 56.25%;
          left: 50%;
          width: 87.5%;
          height: 6.25%;
          transform: translateX(-50%);
          background: var(--color-primary);
          border: none;
          box-shadow: 0 calc(var(--icon-size) / 64) 0 var(--color-primary), 0 calc(var(--icon-size) / -64) 0 var(--color-primary);
        }
        
        .neat-icon.ni-reorder--filled div:nth-child(4),
        .neat-icon.ni-reorder--outline div:nth-child(4),
        .neat-icon.ni-reorder--duotone div:nth-child(4) {
          top: 75%;
          left: 50%;
          width: 87.5%;
          height: 6.25%;
          transform: translateX(-50%);
          background: var(--color-primary);
          border: none;
          box-shadow: 0 calc(var(--icon-size) / 64) 0 var(--color-primary), 0 calc(var(--icon-size) / -64) 0 var(--color-primary);
        }
        
        /* @Name: reload */
        /* @Category: arrows, navigation, interface */
        /* @Aliases: backward, back, undo, history, arrow */
        
        
        /* ALL */
        
        .neat-icon.ni-reverse--filled div:nth-child(1),
        .neat-icon.ni-reverse--outline div:nth-child(1),
        .neat-icon.ni-reverse--duotone div:nth-child(1),
        .neat-icon.ni-reverse--filled div:nth-child(3),
        .neat-icon.ni-reverse--outline div:nth-child(3),
        .neat-icon.ni-reverse--duotone div:nth-child(3),
        .neat-icon.ni-reverse--filled div:nth-child(4),
        .neat-icon.ni-reverse--outline div:nth-child(4),
        .neat-icon.ni-reverse--duotone div:nth-child(4) {
          top: 50%;
          left: 50%;
          width: 12.5%;
          height: 12.5%;
          background: transparent;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }
        
        .neat-icon.ni-reverse--filled div:nth-child(2),
        .neat-icon.ni-reverse--outline div:nth-child(2),
        .neat-icon.ni-reverse--duotone div:nth-child(2) {
          top: 50%;
          left: 50%;
          width: 72.25%;
          height: 72.25%;
          transform: translate(-50%, -45%) rotate(-85deg);
          background: transparent;
          border: calc(var(--icon-size) / 16) solid;
          border-top-color: var(--color-primary);
          border-bottom-color: var(--color-primary);
          border-left-color: transparent;
          border-right-color: var(--color-primary);
          border-radius: 50%;
        }
        
        .neat-icon.ni-reverse--filled div:nth-child(2)::after,
        .neat-icon.ni-reverse--outline div:nth-child(2)::after,
        .neat-icon.ni-reverse--duotone div:nth-child(2)::after {
          content: '${String.fromCodePoint(0x25B6)}';
          top: -15%;
          left: 0;
          color: var(--color-primary);
          font-size: calc(var(--icon-size) / 4);
          transform: rotate(18deg);
        }
        
        /* @Name: schedule */
        /* @Category: time, date, clock */
        /* @Aliases: clock, time, minute, hour, task */
        
        
        /* Minute arrow */
        .neat-icon.ni-schedule--filled div:nth-child(1),
        .neat-icon.ni-schedule--outline div:nth-child(1),
        .neat-icon.ni-schedule--duotone div:nth-child(1) {
          top: 50%;
          left: 50%;
          width: 28%;
          height: calc(var(--icon-size) / 16);;
          background: var(--color-primary);
          border: none;
          border-radius: 0;
          transform-origin: center left;
          transform: rotate(-90deg);
          z-index: 2;
        }
        
        /* Empty dot */
        .neat-icon.ni-schedule--filled div:nth-child(2),
        .neat-icon.ni-schedule--outline div:nth-child(2),
        .neat-icon.ni-schedule--duotone div:nth-child(2) {
          top: 50%;
          left: 50%;
          width: 12.5%;
          height: 12.5%;
          background: transparent;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }
        
        /* Circle body */
        .neat-icon.ni-schedule--filled div:nth-child(3),
        .neat-icon.ni-schedule--outline div:nth-child(3) {
          top: 50%;
          left: 50%;
          width: 75%;
          height: 75%;
          transform: translate(-50%, -50%);
          background: transparent;
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-radius: 50%;
          z-index: 1;
        }
        
        /* Hour arrow */
        .neat-icon.ni-schedule--filled div:nth-child(4),
        .neat-icon.ni-schedule--outline div:nth-child(4),
        .neat-icon.ni-schedule--duotone div:nth-child(4) {
          top: 50%;
          left: 50%;
          width: 21.5%;
          height: calc(var(--icon-size) / 16);;
          background: var(--color-primary);
          border: none;
          border-radius: 0;
          transform-origin: center left;
          transform: rotate(24deg);
          z-index: 2;
        }
        
        /* DUOTONE */
        
        .neat-icon.ni-schedule--duotone div:nth-child(3) {
          top: 50%;
          left: 50%;
          width: 75%;
          height: 75%;
          transform: translate(-50%, -50%);
          background: var(--color-secondary);
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-radius: 50%;
          z-index: 1;
        }
        
        /* @Name: search */
        /* @Category: navigation, interface */
        /* @Aliases: lens, find, look */
        
        
        /* ALL */
        
        .neat-icon.ni-search--filled div:nth-child(1),
        .neat-icon.ni-search--outline div:nth-child(1),
        .neat-icon.ni-search--duotone div:nth-child(1) {
          top: 37.5%;
          left: 37.5%;
          width: 62.5%;
          height: 62.5%;
          transform: translate(-50%, -50%);
          background: transparent;
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-radius: 50%;
        }
        
        .neat-icon.ni-search--filled div:nth-child(4),
        .neat-icon.ni-search--outline div:nth-child(4),
        .neat-icon.ni-search--duotone div:nth-child(4) {
          top: 57.5%;
          left: 57.5%;
          width: 43.75%;
          height: 6.25%;
          transform: translate(-50%, -50%);
          background: var(--color-primary);
          border: none;
          border-top-left-radius: calc(var(--icon-size) / 16);
          border-bottom-left-radius: calc(var(--icon-size) / 16);
          transform-origin: center left;
          transform: rotate(45deg);
        }
        
        /* @Name: shopping cart */
        /* @Category: interface, shop */
        /* @Aliases: purchase, buy, basket, shop */
        
        
        .neat-icon.ni-shopping-cart--filled,
        .neat-icon.ni-shopping-cart--outline,
        .neat-icon.ni-shopping-cart--duotone {
          perspective: calc(var(--icon-size) / 2);
        }
        
        /* FILLED */
        
        /* Basket handle part 1 */
        .neat-icon.ni-shopping-cart--filled div:nth-child(1) {
          top: 16%;
          left: 12.5%;
          width: 12.5%;
          height: 6.25%;
          background: var(--color-primary);
        }
        
        /* Cart base part 1 */
        .neat-icon.ni-shopping-cart--filled div:nth-child(2) {
          top: 66%;
          left: 50%;
          width: 62.5%;
          height: 6.25%;
          transform: translateX(-50%);
          background: var(--color-primary);
          border-top-left-radius: calc(var(--icon-size) / 16);
          border-bottom-left-radius: calc(var(--icon-size) / 16);
        }
        
        /* Cart base part 2 */
        .neat-icon.ni-shopping-cart--filled div:nth-child(2)::before {
          content: '';
          top: 0;
          left: 0;
          width: calc(var(--icon-size) / 4);
          height: calc(var(--icon-size) / 16);
          transform-origin: center left;
          transform: rotate(-45deg) translateY(20%);
          background: var(--color-primary);
          border-top-left-radius: calc(var(--icon-size) / 16);
          border-bottom-left-radius: calc(var(--icon-size) / 16);
        }
        
        /* Basket */
        .neat-icon.ni-shopping-cart--filled div:nth-child(3) {
          top: 43.75%;
          left: 50%;
          width: 43.75%;
          height: 37.5%;
          transform: translate(-40%, -50%) rotate3d(1, 0, 0, -45deg);
          background: var(--color-primary);
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-radius: calc(var(--icon-size) / 16);
          box-shadow: 0 calc(var(--icon-size) / -16) 0 var(--color-primary) inset;
        }
        
        /* Basket handle part 2 */
        .neat-icon.ni-shopping-cart--filled div:nth-child(3)::before {
          content: '';
          left: -40%;
          width: calc(var(--icon-size) / 8);
          height: calc(var(--icon-size) / 20);
          transform-origin: top right;
          transform: rotate(70deg);
          background:var(--color-primary);
          border-radius: calc(var(--icon-size) / 16);
        }
        
        /* Wheels */
        .neat-icon.ni-shopping-cart--filled div:nth-child(4) {
          top: 75%;
          left: 18.75%;
          width: 12.5%;
          height: 12.5%;
          background: var(--color-primary);
          border-radius: 50%;
        }
        .neat-icon.ni-shopping-cart--filled div:nth-child(4)::after {
          content: '';
          top: 0;
          left: 400%;
          width: calc(var(--icon-size) / 8);
          height: calc(var(--icon-size) / 8);
          background: var(--color-primary);
          border-radius: 50%;
        }
        
        /* OUTLINE */
        
        /* Basket handle part 1 */
        .neat-icon.ni-shopping-cart--outline div:nth-child(1) {
          top: 16%;
          left: 12.5%;
          width: 12.5%;
          height: 6.25%;
          background: var(--color-primary);
        }
        
        /* Cart base part 1 */
        .neat-icon.ni-shopping-cart--outline div:nth-child(2) {
          top: 66%;
          left: 50%;
          width: 62.5%;
          height: 6.25%;
          transform: translateX(-50%);
          background: var(--color-primary);
          border-top-left-radius: calc(var(--icon-size) / 16);
          border-bottom-left-radius: calc(var(--icon-size) / 16);
        }
        
        /* Cart base part 2 */
        .neat-icon.ni-shopping-cart--outline div:nth-child(2)::before {
          content: '';
          top: 0;
          left: 0;
          width: calc(var(--icon-size) / 4);
          height: calc(var(--icon-size) / 16);
          transform-origin: center left;
          transform: rotate(-45deg) translateY(20%);
          background: var(--color-primary);
          border-top-left-radius: calc(var(--icon-size) / 16);
          border-bottom-left-radius: calc(var(--icon-size) / 16);
        }
        
        /* Basket */
        .neat-icon.ni-shopping-cart--outline div:nth-child(3) {
          top: 43.75%;
          left: 50%;
          width: 43.75%;
          height: 37.5%;
          transform: translate(-40%, -50%) rotate3d(1, 0, 0, -45deg);
          background: transparent;
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-radius: calc(var(--icon-size) / 16);
          box-shadow: 0 calc(var(--icon-size) / -16) 0 var(--color-primary) inset;
        }
        
        /* Basket handle part 2 */
        .neat-icon.ni-shopping-cart--outline div:nth-child(3)::before {
          content: '';
          left: -40%;
          width: calc(var(--icon-size) / 8);
          height: calc(var(--icon-size) / 20);
          transform-origin: top right;
          transform: rotate(70deg);
          background:var(--color-primary);
          border-radius: calc(var(--icon-size) / 16);
        }
        
        /* Wheels */
        .neat-icon.ni-shopping-cart--outline div:nth-child(4) {
          top: 75%;
          left: 18.75%;
          width: 12.5%;
          height: 12.5%;
          background: var(--color-primary);
          border-radius: 50%;
        }
        .neat-icon.ni-shopping-cart--outline div:nth-child(4)::after {
          content: '';
          top: 0;
          left: 400%;
          width: calc(var(--icon-size) / 8);
          height: calc(var(--icon-size) / 8);
          background: var(--color-primary);
          border-radius: 50%;
        }
        
        /* DUOTONE */
        
        /* Basket handle part 1 */
        .neat-icon.ni-shopping-cart--duotone div:nth-child(1) {
          top: 16%;
          left: 12.5%;
          width: 12.5%;
          height: 6.25%;
          background: var(--color-primary);
        }
        
        /* Cart base part 1 */
        .neat-icon.ni-shopping-cart--duotone div:nth-child(2) {
          top: 66%;
          left: 50%;
          width: 62.5%;
          height: 6.25%;
          transform: translateX(-50%);
          background: var(--color-primary);
          border-top-left-radius: calc(var(--icon-size) / 16);
          border-bottom-left-radius: calc(var(--icon-size) / 16);
        }
        
        /* Cart base part 2 */
        .neat-icon.ni-shopping-cart--duotone div:nth-child(2)::before {
          content: '';
          top: 0;
          left: 0;
          width: calc(var(--icon-size) / 4);
          height: calc(var(--icon-size) / 16);
          transform-origin: center left;
          transform: rotate(-45deg) translateY(20%);
          background: var(--color-primary);
          border-top-left-radius: calc(var(--icon-size) / 16);
          border-bottom-left-radius: calc(var(--icon-size) / 16);
        }
        
        /* Basket */
        .neat-icon.ni-shopping-cart--duotone div:nth-child(3) {
          top: 43.75%;
          left: 50%;
          width: 43.75%;
          height: 37.5%;
          transform: translate(-40%, -50%) rotate3d(1, 0, 0, -45deg);
          background: var(--color-secondary);
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-radius: calc(var(--icon-size) / 16);
          box-shadow: 0 calc(var(--icon-size) / -16) 0 var(--color-primary) inset;
        }
        
        /* Basket handle part 2 */
        .neat-icon.ni-shopping-cart--duotone div:nth-child(3)::before {
          content: '';
          left: -40%;
          width: calc(var(--icon-size) / 8);
          height: calc(var(--icon-size) / 20);
          transform-origin: top right;
          transform: rotate(70deg);
          background:var(--color-primary);
          border-radius: calc(var(--icon-size) / 16);
        }
        
        /* Wheels */
        .neat-icon.ni-shopping-cart--duotone div:nth-child(4) {
          top: 75%;
          left: 18.75%;
          width: 12.5%;
          height: 12.5%;
          background: var(--color-primary);
          border-radius: 50%;
        }
        .neat-icon.ni-shopping-cart--duotone div:nth-child(4)::after {
          content: '';
          top: 0;
          left: 400%;
          width: calc(var(--icon-size) / 8);
          height: calc(var(--icon-size) / 8);
          background: var(--color-primary);
          border-radius: 50%;
        }
        
        /* @Name: shopping cart add */
        /* @Category: interface, shop */
        /* @Aliases: purchase, buy, basket, shop */
        
        
        
        .neat-icon.ni-shopping-cart-add--filled,
        .neat-icon.ni-shopping-cart-add--outline,
        .neat-icon.ni-shopping-cart-add--duotone {
          perspective: calc(var(--icon-size) / 2);
        }
        
        /* ALL */
        
        /* Basket handle part 1 */
        .neat-icon.ni-shopping-cart-add--filled div:nth-child(1),
        .neat-icon.ni-shopping-cart-add--outline div:nth-child(1),
        .neat-icon.ni-shopping-cart-add--duotone div:nth-child(1) {
          top: 16%;
          left: 12.5%;
          width: 12.5%;
          height: 6.25%;
          background: var(--color-primary);
        }
        
        /* Plus sign */
        .neat-icon.ni-shopping-cart-add--filled div:nth-child(1)::after,
        .neat-icon.ni-shopping-cart-add--outline div:nth-child(1)::after,
        .neat-icon.ni-shopping-cart-add--duotone div:nth-child(1)::after {
          content: '${String.fromCodePoint(0x002B)}';
          top: -275%;
          left: 225%;
          font-size: calc(var(--icon-size) / 2);
          color: var(--color-primary);
        }
        
        /* Cart base part 1 */
        .neat-icon.ni-shopping-cart-add--filled div:nth-child(2),
        .neat-icon.ni-shopping-cart-add--outline div:nth-child(2),
        .neat-icon.ni-shopping-cart-add--duotone div:nth-child(2) {
          top: 66%;
          left: 50%;
          width: 62.5%;
          height: 6.25%;
          transform: translateX(-50%);
          background: var(--color-primary);
          border-top-left-radius: calc(var(--icon-size) / 16);
          border-bottom-left-radius: calc(var(--icon-size) / 16);
        }
        
        /* Cart base part 2 */
        .neat-icon.ni-shopping-cart-add--filled div:nth-child(2)::before,
        .neat-icon.ni-shopping-cart-add--outline div:nth-child(2)::before,
        .neat-icon.ni-shopping-cart-add--duotone div:nth-child(2)::before {
          content: '';
          top: 0;
          left: 0;
          width: calc(var(--icon-size) / 4);
          height: calc(var(--icon-size) / 16);
          transform-origin: center left;
          transform: rotate(-45deg) translateY(20%);
          background: var(--color-primary);
          border-top-left-radius: calc(var(--icon-size) / 16);
          border-bottom-left-radius: calc(var(--icon-size) / 16);
        }
        
        /* Basket */
        .neat-icon.ni-shopping-cart-add--filled div:nth-child(3),
        .neat-icon.ni-shopping-cart-add--outline div:nth-child(3),
        .neat-icon.ni-shopping-cart-add--duotone div:nth-child(3) {
          top: 43.75%;
          left: 50%;
          width: 43.75%;
          height: 37.5%;
          transform: translate(-40%, -50%) rotate3d(1, 0, 0, -45deg);
          background: transparent;
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-top: none;
          border-radius: calc(var(--icon-size) / 16);
          box-shadow: 0 calc(var(--icon-size) / -16) 0 var(--color-primary) inset;
        }
        
        /* Basket handle part 2 */
        .neat-icon.ni-shopping-cart-add--filled div:nth-child(3)::before,
        .neat-icon.ni-shopping-cart-add--outline div:nth-child(3)::before,
        .neat-icon.ni-shopping-cart-add--duotone div:nth-child(3)::before {
          content: '';
          top: 0;
          left: -40%;
          width: calc(var(--icon-size) / 8);
          height: calc(var(--icon-size) / 20);
          transform-origin: top right;
          transform: translateY(calc(var(--icon-size) / 16)) rotate(70deg);
          background:var(--color-primary);
          border-radius: calc(var(--icon-size) / 16);
          transition: none;
        }
        
        /* Wheels */
        .neat-icon.ni-shopping-cart-add--filled div:nth-child(4),
        .neat-icon.ni-shopping-cart-add--outline div:nth-child(4),
        .neat-icon.ni-shopping-cart-add--duotone div:nth-child(4) {
          top: 75%;
          left: 18.75%;
          width: 12.5%;
          height: 12.5%;
          background: var(--color-primary);
          border-radius: 50%;
        }
        .neat-icon.ni-shopping-cart-add--filled div:nth-child(4)::after,
        .neat-icon.ni-shopping-cart-add--outline div:nth-child(4)::after,
        .neat-icon.ni-shopping-cart-add--duotone div:nth-child(4)::after {
          content: '';
          top: 0;
          left: 400%;
          width: calc(var(--icon-size) / 8);
          height: calc(var(--icon-size) / 8);
          background: var(--color-primary);
          border-radius: 50%;
        }
        
        /* @Name: star */
        /* @Category: tools, interface */
        /* @Aliases: favourite, rank, ranking, score, rate, bookmark, mark */
        
        
        /* FILLED */
        
        .neat-icon.ni-star--filled div:nth-child(1),
        .neat-icon.ni-star--outline div:nth-child(1),
        .neat-icon.ni-star--duotone div:nth-child(1),
        .neat-icon.ni-star--filled div:nth-child(2),
        .neat-icon.ni-star--outline div:nth-child(2),
        .neat-icon.ni-star--duotone div:nth-child(2),
        .neat-icon.ni-star--filled div:nth-child(4),
        .neat-icon.ni-star--outline div:nth-child(4),
        .neat-icon.ni-star--duotone div:nth-child(4) {
          top: 50%;
          left: 50%;
          width: 12.5%;
          height: 12.5%;
          background: transparent;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }
        
        .neat-icon.ni-star--filled div:nth-child(3),
        .neat-icon.ni-star--outline div:nth-child(3),
        .neat-icon.ni-star--duotone div:nth-child(3) {
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: transparent;
          border: none;
          z-index: 2;
        }
        
        .neat-icon.ni-star--filled div:nth-child(3)::after,
        .neat-icon.ni-star--outline div:nth-child(3)::after,
        .neat-icon.ni-star--duotone div:nth-child(3)::after {
          content: '${String.fromCodePoint(0x2605)}';
          top: 50%;
          left: 50%;
          color: var(--color-primary);
          font-size: calc(var(--icon-size) / 1.25);
          line-height: calc(var(--icon-size) / 1.25);
          transform: translate(-50%, -50%);
        }
        
        /* OUTLINE */
        
        .neat-icon.ni-star--outline div:nth-child(3) {
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: transparent;
          border: none;
          z-index: 2;
        }
        
        .neat-icon.ni-star--outline div:nth-child(3)::after {
          content: '${String.fromCodePoint(0x2606)}';
          top: 50%;
          left: 50%;
          color: var(--color-primary);
          font-size: calc(var(--icon-size) / 1.25);
          line-height: calc(var(--icon-size) / 1.25);
          transform: translate(-50%, -50%);
        }
        
        /* DUOTONE */
        
        .neat-icon.ni-star--duotone div:nth-child(3) {
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: transparent;
          border: none;
          z-index: 2;
        }
        
        .neat-icon.ni-star--duotone div:nth-child(3)::before {
          content: '${String.fromCodePoint(0x2605)}';
          top: 50%;
          left: 50%;
          color: var(--color-secondary);
          font-size: calc(var(--icon-size) / 1.25);
          line-height: calc(var(--icon-size) / 1.25);
          transform: translate(-50%, -50%);
          z-index: 1;
        }
        
        .neat-icon.ni-star--duotone div:nth-child(3)::after {
          content: '${String.fromCodePoint(0x2606)}';
          top: 50%;
          left: 50%;
          color: var(--color-primary);
          font-size: calc(var(--icon-size) / 1.25);
          line-height: calc(var(--icon-size) / 1.25);
          transform: translate(-50%, -50%);
          z-index: 2;
        }
        
        /* @Name: success */
        /* @Category: interface */
        /* @Aliases: done, check, checkbox, ready, yes */
        
        
        /* ALL */
        
        .neat-icon.ni-success--filled div:nth-child(1),
        .neat-icon.ni-success--outline div:nth-child(1),
        .neat-icon.ni-success--duotone div:nth-child(1) {
          top: 75%;
          left: 0%;
          width: 37.5%;
          height: 6.25%;
          transform-origin: bottom right;
          transform: rotate(45deg);
          background: var(--color-primary);
          border: none;
        }
        
        .neat-icon.ni-success--filled div:nth-child(2),
        .neat-icon.ni-success--outline div:nth-child(2),
        .neat-icon.ni-success--duotone div:nth-child(2),
        .neat-icon.ni-success--filled div:nth-child(3),
        .neat-icon.ni-success--outline div:nth-child(3),
        .neat-icon.ni-success--duotone div:nth-child(3) {
          top: 50%;
          left: 50%;
          width: 12.5%;
          height: 12.5%;
          background: transparent;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }
        
        .neat-icon.ni-success--filled div:nth-child(4),
        .neat-icon.ni-success--outline div:nth-child(4),
        .neat-icon.ni-success--duotone div:nth-child(4) {
          top: 75%;
          left: 37.5%;
          width: 81.25%;
          height: 6.25%;
          transform-origin: bottom left;
          transform: rotate(-45deg);
          background: var(--color-primary);
          border: none;
        }
        
        /* @Name: success circle */
        /* @Category: interface, circle */
        /* @Aliases: done, check, checkbox, ready, yes */
        
        
        /* OUTLINE */
        
        .neat-icon.ni-success-circle--filled div:nth-child(1) {
          top: 65.75%;
          left: 18.75%;
          width: 25%;
          height: 6.25%;
          transform-origin: bottom right;
          transform: rotate(45deg);
          background: white;
          border: none;
          z-index: 2;
        }
        
        .neat-icon.ni-success-circle--filled div:nth-child(2) {
          top: 50%;
          left: 50%;
          width: 12.5%;
          height: 12.5%;
          background: transparent;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }
        
        .neat-icon.ni-success-circle--filled div:nth-child(3),
        .neat-icon.ni-success-circle--outline div:nth-child(3),
        .neat-icon.ni-success-circle--duotone div:nth-child(3) {
          top: 50%;
          left: 50%;
          width: 87.5%;
          height: 87.5%;
          transform: translate(-50%, -50%);
          background: var(--color-primary);
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-radius: 50%;
          z-index: 1;
        }
        
        .neat-icon.ni-success-circle--filled div:nth-child(4) {
          top: 65.75%;
          left: 43.75%;
          width: 50%;
          height: 6.25%;
          transform-origin: bottom left;
          transform: rotate(-45deg);
          background: white;
          border: none;
          z-index: 2;
        }
        
        /* OUTLINE */
        
        .neat-icon.ni-success-circle--outline div:nth-child(1),
        .neat-icon.ni-success-circle--duotone div:nth-child(1) {
          top: 65.75%;
          left: 18.75%;
          width: 25%;
          height: 6.25%;
          transform-origin: bottom right;
          transform: rotate(45deg);
          background: var(--color-primary);
          border: none;
          z-index: 2;
        }
        
        .neat-icon.ni-success-circle--outline div:nth-child(3) {
          top: 50%;
          left: 50%;
          width: 87.5%;
          height: 87.5%;
          transform: translate(-50%, -50%);
          background: transparent;
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-radius: 50%;
          z-index: 1;
        }
        
        .neat-icon.ni-success-circle--outline div:nth-child(4),
        .neat-icon.ni-success-circle--duotone div:nth-child(4) {
          top: 65.75%;
          left: 43.75%;
          width: 50%;
          height: 6.25%;
          transform-origin: bottom left;
          transform: rotate(-45deg);
          background: var(--color-primary);
          border: none;
          z-index: 2;
        }
        
        /* DUOTONE */
        
        .neat-icon.ni-success-circle--duotone div:nth-child(3) {
          top: 50%;
          left: 50%;
          width: 87.5%;
          height: 87.5%;
          transform: translate(-50%, -50%);
          background: var(--color-secondary);
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-radius: 50%;
          z-index: 1;
        }
        
        /* @Name: success square */
        /* @Category: interface */
        /* @Aliases: done, check, checkbox, ready, yes */
        
        
        /* OUTLINE */
        
        .neat-icon.ni-success-square--filled div:nth-child(1) {
          top: 65.75%;
          left: 18.75%;
          width: 25%;
          height: 6.25%;
          transform-origin: bottom right;
          transform: rotate(45deg);
          background: white;
          border: none;
          z-index: 2;
        }
        
        .neat-icon.ni-success-square--filled div:nth-child(2) {
          top: 50%;
          left: 50%;
          width: 12.5%;
          height: 12.5%;
          background: transparent;
          border-radius: 0;
          transform: translate(-50%, -50%);
        }
        
        .neat-icon.ni-success-square--filled div:nth-child(3),
        .neat-icon.ni-success-square--outline div:nth-child(3),
        .neat-icon.ni-success-square--duotone div:nth-child(3) {
          top: 50%;
          left: 50%;
          width: 87.5%;
          height: 87.5%;
          transform: translate(-50%, -50%);
          background: var(--color-primary);
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-radius: 0;
          z-index: 1;
        }
        
        .neat-icon.ni-success-square--filled div:nth-child(4) {
          top: 65.75%;
          left: 43.75%;
          width: 50%;
          height: 6.25%;
          transform-origin: bottom left;
          transform: rotate(-45deg);
          background: white;
          border: none;
          z-index: 2;
        }
        
        /* OUTLINE */
        
        .neat-icon.ni-success-square--outline div:nth-child(1),
        .neat-icon.ni-success-square--duotone div:nth-child(1) {
          top: 65.75%;
          left: 18.75%;
          width: 25%;
          height: 6.25%;
          transform-origin: bottom right;
          transform: rotate(45deg);
          background: var(--color-primary);
          border: none;
          z-index: 2;
        }
        
        .neat-icon.ni-success-square--outline div:nth-child(3) {
          top: 50%;
          left: 50%;
          width: 87.5%;
          height: 87.5%;
          transform: translate(-50%, -50%);
          background: transparent;
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-radius: 0;
          z-index: 1;
        }
        
        .neat-icon.ni-success-square--outline div:nth-child(4),
        .neat-icon.ni-success-square--duotone div:nth-child(4) {
          top: 65.75%;
          left: 43.75%;
          width: 50%;
          height: 6.25%;
          transform-origin: bottom left;
          transform: rotate(-45deg);
          background: var(--color-primary);
          border: none;
          z-index: 2;
        }
        
        /* DUOTONE */
        
        .neat-icon.ni-success-square--duotone div:nth-child(3) {
          top: 50%;
          left: 50%;
          width: 87.5%;
          height: 87.5%;
          transform: translate(-50%, -50%);
          background: var(--color-secondary);
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-radius: 0;
          z-index: 1;
        }
        
        /* @Name: trash can */
        /* @Category: interface */
        /* @Aliases: delete, remove, erase, eject */
        
        
        /* FILLED */
        
        .neat-icon.ni-trash-can--filled div:nth-child(1),
        .neat-icon.ni-trash-can--outline div:nth-child(1),
        .neat-icon.ni-trash-can--duotone div:nth-child(1) {
          top: 12.5%;
          left: 50%;
          width: 31.25%;
          height: 3%;
          background: var(--color-primary);
          border: none;
          border-top-left-radius: 50%;
          border-top-right-radius: 50%;
          transform: translateX(-50%);
        }
        
        .neat-icon.ni-trash-can--filled div:nth-child(2),
        .neat-icon.ni-trash-can--outline div:nth-child(2),
        .neat-icon.ni-trash-can--duotone div:nth-child(2) {
          top: 15.5%;
          left: 50%;
          width: 56.25%;
          height: 6.25%;
          background: var(--color-primary);
          border: none;
          transform: translateX(-50%);
        }
        
        .neat-icon.ni-trash-can--filled div:nth-child(3) {
          top: 25%;
          left: 50%;
          width: 50%;
          height: 62.5%;
          background: var(--color-primary);
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-bottom-left-radius: calc(var(--icon-size) / 16);
          border-bottom-right-radius: calc(var(--icon-size) / 16);
          transform: translateX(-50%);
        }
        
        .neat-icon.ni-trash-can--filled div:nth-child(4),
        .neat-icon.ni-trash-can--outline div:nth-child(4),
        .neat-icon.ni-trash-can--duotone div:nth-child(4) {
          top: 50%;
          left: 50%;
          width: 12.5%;
          height: 12.5%;
          background: transparent;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }
        
        /* OUTLINE */
        
        .neat-icon.ni-trash-can--outline div:nth-child(3) {
          top: 25%;
          left: 50%;
          width: 50%;
          height: 62.5%;
          background: transparent;
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-bottom-left-radius: calc(var(--icon-size) / 16);
          border-bottom-right-radius: calc(var(--icon-size) / 16);
          transform: translateX(-50%);
        }
        
        /* DUOTONE */
        
        .neat-icon.ni-trash-can--duotone div:nth-child(3) {
          top: 25%;
          left: 50%;
          width: 50%;
          height: 62.5%;
          background: var(--color-secondary);
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-bottom-left-radius: calc(var(--icon-size) / 16);
          border-bottom-right-radius: calc(var(--icon-size) / 16);
          transform: translateX(-50%);
        }
        
        /* @Name: undo */
        /* @Category: arrows, navigation, interface */
        /* @Aliases: backward, back, jump, reverse, history, arrow */
        
        
        /* ALL */
        
        .neat-icon.ni-undo--filled div:nth-child(1),
        .neat-icon.ni-undo--outline div:nth-child(1),
        .neat-icon.ni-undo--duotone div:nth-child(1),
        .neat-icon.ni-undo--filled div:nth-child(3),
        .neat-icon.ni-undo--outline div:nth-child(3),
        .neat-icon.ni-undo--duotone div:nth-child(3),
        .neat-icon.ni-undo--filled div:nth-child(4),
        .neat-icon.ni-undo--outline div:nth-child(4),
        .neat-icon.ni-undo--duotone div:nth-child(4) {
          top: 50%;
          left: 50%;
          width: 12.5%;
          height: 12.5%;
          background: transparent;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }
        
        .neat-icon.ni-undo--filled div:nth-child(2),
        .neat-icon.ni-undo--outline div:nth-child(2),
        .neat-icon.ni-undo--duotone div:nth-child(2) {
          top: 50%;
          left: 50%;
          width: 72.25%;
          height: 72.25%;
          transform: translate(-50%, -30%) rotate(-40deg);
          background: transparent;
          border: calc(var(--icon-size) / 16) solid;
          border-top-color: var(--color-primary);
          border-bottom-color: transparent;
          border-left-color: transparent;
          border-right-color: var(--color-primary);
          border-radius: 50%;
        }
        
        .neat-icon.ni-undo--filled div:nth-child(2)::after,
        .neat-icon.ni-undo--outline div:nth-child(2)::after,
        .neat-icon.ni-undo--duotone div:nth-child(2)::after {
          content: '${String.fromCodePoint(0x25B6)}';
          top: -15%;
          left: 0;
          color: var(--color-primary);
          font-size: calc(var(--icon-size) / 4);
          transform: rotate(18deg);
        }
        
        /* @Name: unfold less */
        /* @Category: arrows, interface */
        /* @Aliases: center, inside, less, hide */
        
        
        /* ALL */
        
        .neat-icon.ni-unfold-less--filled div:nth-child(1),
        .neat-icon.ni-unfold-less--outline div:nth-child(1),
        .neat-icon.ni-unfold-less--duotone div:nth-child(1) {
          top: 37.5%;
          left: 25%;
          width: 25%;
          height: 6.25%;
          transform-origin: bottom right;
          transform: rotate(45deg);
          background: var(--color-primary);
          border: none;
        }
        
        .neat-icon.ni-unfold-less--filled div:nth-child(2),
        .neat-icon.ni-unfold-less--outline div:nth-child(2),
        .neat-icon.ni-unfold-less--duotone div:nth-child(2) {
          top: 37.5%;
          left: 50%;
          width: 25%;
          height: 6.25%;
          transform-origin: bottom left;
          transform: rotate(-45deg);
          background: var(--color-primary);
          border: none;
        }
        
        .neat-icon.ni-unfold-less--filled div:nth-child(3),
        .neat-icon.ni-unfold-less--outline div:nth-child(3),
        .neat-icon.ni-unfold-less--duotone div:nth-child(3) {
          top: 56.25%;
          left: 50%;
          width: 25%;
          height: 6.25%;
          transform-origin: top left;
          transform: rotate(45deg);
          background: var(--color-primary);
          border: none;
        }
        
        .neat-icon.ni-unfold-less--filled div:nth-child(4),
        .neat-icon.ni-unfold-less--outline div:nth-child(4),
        .neat-icon.ni-unfold-less--duotone div:nth-child(4) {
          top: 56.25%;
          left: 25%;
          width: 25%;
          height: 6.25%;
          transform-origin: top right;
          transform: rotate(-45deg);
          background: var(--color-primary);
          border: none;
        }
        
        /* @Name: unfold more */
        /* @Category: arrows, interface */
        /* @Aliases: outside, more, expand */
        
        
        /* ALL */
        
        .neat-icon.ni-unfold-more--filled div:nth-child(1),
        .neat-icon.ni-unfold-more--outline div:nth-child(1),
        .neat-icon.ni-unfold-more--duotone div:nth-child(1) {
          top: 75%;
          left: 25%;
          width: 25%;
          height: 6.25%;
          transform-origin: bottom right;
          transform: rotate(45deg);
          background: var(--color-primary);
          border: none;
        }
        
        .neat-icon.ni-unfold-more--filled div:nth-child(2),
        .neat-icon.ni-unfold-more--outline div:nth-child(2),
        .neat-icon.ni-unfold-more--duotone div:nth-child(2) {
          top: 75%;
          left: 50%;
          width: 25%;
          height: 6.25%;
          transform-origin: bottom left;
          transform: rotate(-45deg);
          background: var(--color-primary);
          border: none;
        }
        
        .neat-icon.ni-unfold-more--filled div:nth-child(3),
        .neat-icon.ni-unfold-more--outline div:nth-child(3),
        .neat-icon.ni-unfold-more--duotone div:nth-child(3) {
          top: 18.75%;
          left: 50%;
          width: 25%;
          height: 6.25%;
          transform-origin: top left;
          transform: rotate(45deg);
          background: var(--color-primary);
          border: none;
        }
        
        .neat-icon.ni-unfold-more--filled div:nth-child(4),
        .neat-icon.ni-unfold-more--outline div:nth-child(4),
        .neat-icon.ni-unfold-more--duotone div:nth-child(4) {
          top: 18.75%;
          left: 25%;
          width: 25%;
          height: 6.25%;
          transform-origin: top right;
          transform: rotate(-45deg);
          background: var(--color-primary);
          border: none;
        }
        
        /* @Name: user account */
        /* @Category: interface */
        /* @Aliases: person, human, face */
        
        
        /* FILLED */
        
        .neat-icon.ni-user-account--filled div:nth-child(1) {
          top: 18.75%;
          left: 50%;
          width: 31.25%;
          height: 31.25%;
          transform: translateX(-50%);
          background: var(--color-primary);
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-radius: 50%;
        }
        
        .neat-icon.ni-user-account--filled div:nth-child(2),
        .neat-icon.ni-user-account--filled div:nth-child(3) {
          top: 50%;
          left: 50%;
          width: 12.5%;
          height: 12.5%;
          background: transparent;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }
        
        .neat-icon.ni-user-account--filled div:nth-child(4) {
          top: 56.25%;
          left: 50%;
          width: 62.5%;
          height: 25%;
          transform: translateX(-50%);
          background: var(--color-primary);
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-top-left-radius: 50%;
          border-top-right-radius: 50%;
        }
        
        /* OUTLINE */
        
        .neat-icon.ni-user-account--outline div:nth-child(1) {
          top: 18.75%;
          left: 50%;
          width: 31.25%;
          height: 31.25%;
          transform: translateX(-50%);
          background: transparent;
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-radius: 50%;
        }
        
        .neat-icon.ni-user-account--outline div:nth-child(2),
        .neat-icon.ni-user-account--outline div:nth-child(3) {
          top: 50%;
          left: 50%;
          width: 12.5%;
          height: 12.5%;
          background: transparent;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }
        
        .neat-icon.ni-user-account--outline div:nth-child(4) {
          top: 56.25%;
          left: 50%;
          width: 62.5%;
          height: 25%;
          transform: translateX(-50%);
          background: transparent;
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-top-left-radius: 50%;
          border-top-right-radius: 50%;
        }
        
        /* DUOTONE */
        
        .neat-icon.ni-user-account--duotone div:nth-child(1) {
          top: 18.75%;
          left: 50%;
          width: 31.25%;
          height: 31.25%;
          transform: translateX(-50%);
          background: var(--color-secondary);
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-radius: 50%;
        }
        
        .neat-icon.ni-user-account--duotone div:nth-child(2),
        .neat-icon.ni-user-account--duotone div:nth-child(3) {
          top: 50%;
          left: 50%;
          width: 12.5%;
          height: 12.5%;
          background: transparent;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }
        
        .neat-icon.ni-user-account--duotone div:nth-child(4) {
          top: 56.25%;
          left: 50%;
          width: 62.5%;
          height: 25%;
          transform: translateX(-50%);
          background: var(--color-secondary);
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-top-left-radius: 50%;
          border-top-right-radius: 50%;
        }
        
        /* @Name: user account circle */
        /* @Category: interface, circle */
        /* @Aliases: person, human, face */
        
        
        /* FILLED */
        
        .neat-icon.ni-user-account-circle--filled div:nth-child(1) {
          top: 18.75%;
          left: 50%;
          width: 31.25%;
          height: 31.25%;
          transform: translateX(-50%);
          background: white;
          border: calc(var(--icon-size) / 16) solid white;
          border-radius: 50%;
          z-index: 2;
        }
        
        .neat-icon.ni-user-account-circle--filled div:nth-child(2) {
          top: 50%;
          left: 50%;
          width: 87.5%;
          height: 87.5%;
          transform: translate(-50%, -50%);
          background: transparent;
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-radius: 50%;
          z-index: 4;
        }
        
        .neat-icon.ni-user-account-circle--filled div:nth-child(3) {
          top: 50%;
          left: 50%;
          width: 87.5%;
          height: 87.5%;
          transform: translate(-50%, -50%);
          background: var(--color-primary);
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-radius: 50%;
          z-index: 1;
        }
        
        .neat-icon.ni-user-account-circle--filled div:nth-child(4) {
          top: 56.25%;
          left: 50%;
          width: 62.5%;
          height: 25%;
          transform: translateX(-50%);
          background: white;
          border: calc(var(--icon-size) / 16) solid white;
          border-top-left-radius: 50%;
          border-top-right-radius: 50%;
          border-bottom-left-radius: calc(var(--icon-size) / 16);
          border-bottom-right-radius: calc(var(--icon-size) / 16);
          z-index: 3;
        }
        
        /* OUTLINE */
        
        .neat-icon.ni-user-account-circle--outline div:nth-child(1) {
          top: 18.75%;
          left: 50%;
          width: 31.25%;
          height: 31.25%;
          transform: translateX(-50%);
          background: transparent;
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-radius: 50%;
          z-index: 2;
        }
        
        .neat-icon.ni-user-account-circle--outline div:nth-child(2) {
          top: 50%;
          left: 50%;
          width: 12.5%;
          height: 12.5%;
          background: transparent;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }
        
        .neat-icon.ni-user-account-circle--outline div:nth-child(3) {
          top: 50%;
          left: 50%;
          width: 87.5%;
          height: 87.5%;
          transform: translate(-50%, -50%);
          background: transparent;
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-radius: 50%;
          z-index: 1;
        }
        
        .neat-icon.ni-user-account-circle--outline div:nth-child(4) {
          top: 56.25%;
          left: 50%;
          width: 62.5%;
          height: 25%;
          transform: translateX(-50%);
          background: transparent;
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-top-left-radius: 50%;
          border-top-right-radius: 50%;
          border-bottom-left-radius: calc(var(--icon-size) / 16);
          border-bottom-right-radius: calc(var(--icon-size) / 16);
          z-index: 3;
        }
        
        /* DUOTONE */
        
        .neat-icon.ni-user-account-circle--duotone div:nth-child(1) {
          top: 18.75%;
          left: 50%;
          width: 31.25%;
          height: 31.25%;
          transform: translateX(-50%);
          background: white;
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-radius: 50%;
          z-index: 2;
        }
        
        .neat-icon.ni-user-account-circle--duotone div:nth-child(2) {
          top: 50%;
          left: 50%;
          width: 12.5%;
          height: 12.5%;
          background: transparent;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }
        
        .neat-icon.ni-user-account-circle--duotone div:nth-child(3) {
          top: 50%;
          left: 50%;
          width: 87.5%;
          height: 87.5%;
          transform: translate(-50%, -50%);
          background: var(--color-secondary);
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-radius: 50%;
          z-index: 1;
        }
        
        .neat-icon.ni-user-account-circle--duotone div:nth-child(4) {
          top: 56.25%;
          left: 50%;
          width: 62.5%;
          height: 25%;
          transform: translateX(-50%);
          background: white;
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-top-left-radius: 50%;
          border-top-right-radius: 50%;
          border-bottom-left-radius: calc(var(--icon-size) / 16);
          border-bottom-right-radius: calc(var(--icon-size) / 16);
          z-index: 3;
        }
        
        /* @Name: user account square */
        /* @Category: interface */
        /* @Aliases: person, human, face */
        
        
        /* FILLED */
        
        .neat-icon.ni-user-account-square--filled div:nth-child(1) {
          top: 18.75%;
          left: 50%;
          width: 31.25%;
          height: 31.25%;
          transform: translateX(-50%);
          background: white;
          border: calc(var(--icon-size) / 16) solid white;
          border-radius: 50%;
          z-index: 2;
        }
        
        .neat-icon.ni-user-account-square--filled div:nth-child(2) {
          top: 50%;
          left: 50%;
          width: 12.5%;
          height: 12.5%;
          background: transparent;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }
        
        .neat-icon.ni-user-account-square--filled div:nth-child(3) {
          top: 50%;
          left: 50%;
          width: 87.5%;
          height: 87.5%;
          transform: translate(-50%, -50%);
          background: var(--color-primary);
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-radius: calc(var(--icon-size) / 16);
          z-index: 1;
        }
        
        .neat-icon.ni-user-account-square--filled div:nth-child(4) {
          top: 56.25%;
          left: 50%;
          width: 62.5%;
          height: 25%;
          transform: translateX(-50%);
          background: white;
          border: calc(var(--icon-size) / 16) solid white;
          border-top-left-radius: 50%;
          border-top-right-radius: 50%;
          z-index: 3;
        }
        
        /* OUTLINE */
        
        .neat-icon.ni-user-account-square--outline div:nth-child(1) {
          top: 18.75%;
          left: 50%;
          width: 31.25%;
          height: 31.25%;
          transform: translateX(-50%);
          background: transparent;
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-radius: 50%;
          z-index: 2;
        }
        
        .neat-icon.ni-user-account-square--outline div:nth-child(2) {
          top: 50%;
          left: 50%;
          width: 12.5%;
          height: 12.5%;
          background: transparent;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }
        
        .neat-icon.ni-user-account-square--outline div:nth-child(3) {
          top: 50%;
          left: 50%;
          width: 87.5%;
          height: 87.5%;
          transform: translate(-50%, -50%);
          background: transparent;
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-radius: calc(var(--icon-size) / 16);
          z-index: 1;
        }
        
        .neat-icon.ni-user-account-square--outline div:nth-child(4) {
          top: 56.25%;
          left: 50%;
          width: 62.5%;
          height: 25%;
          transform: translateX(-50%);
          background: transparent;
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-top-left-radius: 50%;
          border-top-right-radius: 50%;
          z-index: 3;
        }
        
        /* DUOTONE */
        
        .neat-icon.ni-user-account-square--duotone div:nth-child(1) {
          top: 18.75%;
          left: 50%;
          width: 31.25%;
          height: 31.25%;
          transform: translateX(-50%);
          background: white;
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-radius: 50%;
          z-index: 2;
        }
        
        .neat-icon.ni-user-account-square--duotone div:nth-child(2) {
          top: 50%;
          left: 50%;
          width: 12.5%;
          height: 12.5%;
          background: transparent;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }
        
        .neat-icon.ni-user-account-square--duotone div:nth-child(3) {
          top: 50%;
          left: 50%;
          width: 87.5%;
          height: 87.5%;
          transform: translate(-50%, -50%);
          background: var(--color-secondary);
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-radius: calc(var(--icon-size) / 16);
          z-index: 1;
        }
        
        .neat-icon.ni-user-account-square--duotone div:nth-child(4) {
          top: 56.25%;
          left: 50%;
          width: 62.5%;
          height: 25%;
          transform: translateX(-50%);
          background: white;
          border: calc(var(--icon-size) / 16) solid var(--color-primary);
          border-top-left-radius: 50%;
          border-top-right-radius: 50%;
          z-index: 3;
        }
      `}</style>
    </div>
  );
}

export default Icon;