/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';

const YourComponent = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch tasks when component mounts
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('docker.io/bisialgoruthm/task_manager_web_api:latest');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const createTask = async () => {
    try {
      // Your task data object to be sent to the Django backend
      const taskData = {
        // ...your task data
      };

      // Make a POST request to create a new task
      await axios.post('docker.io/bisialgoruthm/task_manager_web_api:latest', taskData);

      // After creating, fetch updated task list
      fetchTasks();
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  return (
    <View>
      <Text>Task List:</Text>
      {tasks.map((task) => (
        <Text key={task.id}>{task.title}</Text>
      ))}
      <Button title="Create Task" onPress={createTask} />
    </View>
  );
};

export default YourComponent;
