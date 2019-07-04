export const fetchTodoList = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${Math.floor(Math.random() * 10) + 1}`);
      const data = await response.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  };
  