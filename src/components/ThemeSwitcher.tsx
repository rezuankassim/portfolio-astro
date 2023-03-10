import {createSignal, Match, onMount, Switch} from 'solid-js';

const ThemeSwitcher = () => {
  const [theme, setTheme] = createSignal<'dark' | 'light'>('light');

  onMount(() => {
    setTheme((localStorage.getItem('theme') as 'dark' | 'light') || 'light');

    if (theme() === 'light') {
      document.querySelector('html')?.classList.remove('dark');
    } else {
      document.querySelector('html')?.classList.add('dark');
    }
  });

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

    localStorage.setItem('theme', theme());

    if (theme() === 'light') {
      document.querySelector('html')?.classList.remove('dark');
    } else {
      document.querySelector('html')?.classList.add('dark');
    }
  };

  return (
    <button class="flex items-center text-[#111111] dark:text-white" onClick={toggleTheme}>
      <Switch>
        <Match when={theme() === 'light'}>
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M21.325 12.3462C21.205 12.2422 21.043 12.2002 20.888 12.2362C18.201 12.8342 15.188 11.5442 13.598 9.96117C11.955 8.31317 11.216 5.56117 11.76 3.11217C11.794 2.95717 11.753 2.79517 11.649 2.67517C11.544 2.55517 11.392 2.49417 11.231 2.50517C8.18998 2.75417 5.43298 4.46717 3.85498 7.08917C2.23598 9.78017 2.06298 13.0832 3.38198 16.1522C4.22898 18.1132 5.83498 19.7282 7.78698 20.5812C9.17498 21.1932 10.612 21.4972 12.022 21.4972C13.728 21.4972 15.394 21.0522 16.878 20.1662C19.525 18.5872 21.251 15.8202 21.495 12.7632C21.508 12.6052 21.445 12.4502 21.325 12.3462Z"
              fill="currentColor"
            />
          </svg>
        </Match>
        <Match when={theme() === 'dark'}>
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.28154 5.05692C5.95354 4.72092 5.42554 4.72392 5.08954 5.05192C4.75354 5.37992 4.75654 5.92792 5.08454 6.26492C5.25054 6.43492 5.47154 6.52092 5.69254 6.52092C5.90654 6.52092 6.12054 6.43992 6.28654 6.27892C6.62254 5.95192 6.62854 5.41292 6.30154 5.07692L6.28154 5.05692Z"
              fill="currentColor"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.08434 17.737L5.06434 17.757C4.73734 18.093 4.75333 18.621 5.08933 18.949C5.25234 19.108 5.46433 19.186 5.67734 19.186C5.90434 19.186 6.13233 19.097 6.30133 18.924C6.62833 18.588 6.62233 18.05 6.28633 17.722C5.95034 17.395 5.41234 17.402 5.08434 17.737Z"
              fill="currentColor"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.01064 11.1604C2.54164 11.1604 2.16064 11.5414 2.16064 12.0104C2.16064 12.4794 2.54164 12.8604 3.01064 12.8604H3.05964C3.52964 12.8604 3.88564 12.4794 3.88564 12.0104C3.88564 11.5414 3.47964 11.1604 3.01064 11.1604Z"
              fill="currentColor"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.0175 20.1106C11.5485 20.1106 11.1674 20.4916 11.1674 20.9606V20.9906C11.1674 21.4606 11.5485 21.8256 12.0175 21.8256C12.4865 21.8256 12.8674 21.4296 12.8674 20.9606C12.8674 20.4916 12.4865 20.1106 12.0175 20.1106Z"
              fill="currentColor"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.7601 5.04809L17.7151 5.09809C17.3981 5.44509 17.4461 5.95809 17.7931 6.27409C17.9491 6.41709 18.1491 6.48509 18.3501 6.48509C18.5951 6.48509 18.8431 6.38409 19.0161 6.19409C19.3321 5.84609 19.3071 5.30909 18.9611 4.99309C18.6131 4.67409 18.0751 4.70109 17.7601 5.04809Z"
              fill="currentColor"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.9705 17.758C18.6545 17.411 18.1395 17.412 17.7925 17.728C17.4455 18.044 17.4435 18.606 17.7605 18.953C17.9275 19.137 18.1575 19.231 18.3885 19.231C18.5925 19.231 18.7975 19.157 18.9605 19.008C19.3075 18.693 19.3325 18.155 19.0155 17.808L18.9705 17.758Z"
              fill="currentColor"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.9681 11.1604C20.4991 11.1604 20.1181 11.5414 20.1181 12.0104C20.1181 12.4794 20.4991 12.8604 20.9681 12.8604H21.0101C21.4801 12.8604 21.8391 12.4794 21.8391 12.0104C21.8391 11.5414 21.4371 11.1604 20.9681 11.1604Z"
              fill="currentColor"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.0175 3.89078C12.4865 3.89078 12.8674 3.50978 12.8674 3.04078V3.01078C12.8674 2.54078 12.4865 2.17578 12.0175 2.17578C11.5485 2.17578 11.1674 2.57178 11.1674 3.04078C11.1674 3.50978 11.5485 3.89078 12.0175 3.89078Z"
              fill="currentColor"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.012 6.57056C9.02004 6.57056 6.58704 9.00256 6.58704 11.9906C6.58704 14.9856 9.02004 17.4206 12.012 17.4206C15.003 17.4206 17.436 14.9856 17.436 11.9906C17.436 9.00256 15.003 6.57056 12.012 6.57056Z"
              fill="currentColor"
            />
          </svg>
        </Match>
      </Switch>
    </button>
  );
};

export default ThemeSwitcher;
