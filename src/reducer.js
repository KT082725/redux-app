function tasksReducer(amount, action) {
    switch (action.type) {
      case 'deposit': {
        return (amount+action.money)
      }
      case 'withraw': {
        return (amount+action.money)
      }
      default: {
        throw Error('Unknown action: ' + action.type);
      }
    }
  }

export default tasksReducer;