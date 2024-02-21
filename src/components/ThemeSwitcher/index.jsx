import React from 'react';
import { connect } from 'react-redux';
import { setTheme } from '../../store/slices/themeSlice';

const ThemeSwitcher = ({ isLight, changeTheme }) => {
  const handleTheme = () => changeTheme(!isLight);
  return <button onClick={handleTheme}>Set {isLight ? 'dark' : 'light'}</button>;
};

const mapStateToProps = (state) => state.theme;

const mapDispatchToProps = (dispatch) => ({
  changeTheme: (v) => dispatch(setTheme(v)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitcher);
