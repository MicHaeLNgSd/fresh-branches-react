// const root = document.getElementById('root');
// const par = document.createElement('p');
// par.classList.add('text');
// par.textContent = 'some text';
// root.append(par);

const htmlContainer = document.getElementById('root');
const root = ReactDOM.createRoot(htmlContainer);
// const reactPar = React.createElement('p', { className: 'text' }, 'Hello from React!');
// root.render(reactPar);

// const rH1 = React.createElement('h1', { className: 'text' }, 'ITS H1');
const user = {
  id: 1,
  name: 'jjshych',
};

const rH1 = (
  <h1 className="text" id="asdsd" title={user.name}>
    Hello {user.name}
  </h1>
);
root.render(rH1);
