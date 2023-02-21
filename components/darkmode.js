import React, { useState } from 'react';
import { Switch } from 'react-native';

const ToggleDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(previousState => !previousState);

  return (
    <Switch
      value={isDarkMode}
      onValueChange={toggleDarkMode}
      trackColor={{ false: '#767577', true: '#81b0ff' }}
      thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
      ios_backgroundColor="#3e3e3e"
    />
  );
};

export default ToggleDarkMode;