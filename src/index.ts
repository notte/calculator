import './style.scss';

window.onload = () => {
  const mode = document.getElementById('mode');
  const result = document.getElementById('result');

  document.getElementById('add').addEventListener('click', () => {
    mode.innerHTML = '+';

    const first = (document.getElementById('first') as HTMLInputElement).value;
    const latter = (document.getElementById('latter') as HTMLInputElement).value;

    result.innerHTML = String((+first + +latter).toFixed(2));
    if (+first === 0 && +latter === 0) {
      result.innerHTML = String(0);
    }
  }, false);

  document.getElementById('reduce').addEventListener('click', () => {
    mode.innerHTML = '-';
    const first = (document.getElementById('first') as HTMLInputElement).value;
    const latter = (document.getElementById('latter') as HTMLInputElement).value;
    result.innerHTML = String((+first - +latter).toFixed(2));
    if (result.innerHTML === 'Infinity') {
      result.innerHTML = '錯誤';
    }
  }, false);

  document.getElementById('multiplication').addEventListener('click', () => {
    mode.innerHTML = 'x';

    const first = (document.getElementById('first') as HTMLInputElement).value;
    const latter = (document.getElementById('latter') as HTMLInputElement).value;
    result.innerHTML = String((+first * +latter).toFixed(2));
    if (result.innerHTML === 'Infinity') {
      result.innerHTML = '錯誤';
    }
  }, false);

  document.getElementById('divide').addEventListener('click', () => {
    mode.innerHTML = '/';

    const first = (document.getElementById('first') as HTMLInputElement).value;
    const latter = (document.getElementById('latter') as HTMLInputElement).value;
    result.innerHTML = String((+first / +latter).toFixed(2));
    if (result.innerHTML === 'Infinity') {
      result.innerHTML = '錯誤';
    }
  }, false);

  document.getElementById('zero').addEventListener('click', () => {
    mode.innerHTML = '+';
    const first = (document.getElementById('first') as HTMLInputElement);
    const latter = (document.getElementById('latter') as HTMLInputElement);

    first.value = String(0);
    latter.value = String(0);
    result.innerHTML = String(0);
    if (result.innerHTML === 'Infinity') {
      result.innerHTML = '錯誤';
    }
  }, false);
};
