        throw new Error("Nothing to undo");
      }
      redoStack.push(JSON.stringify(object));
      let prevState = JSON.parse(undoStack.pop());
      for (let k in object) {
        delete object[k];
      }
      Object.assign(object, prevState);
    },
    redo: function() {
      if (redoStack.length === 0) {
        throw new Error("Nothing to redo");
      }
      undoStack.push(JSON.stringify(object));
      let nextState = JSON.parse(redoStack.pop());
      for (let k in object) {
        delete object[k];
      }
      Object.assign(object, nextState);
    }
  };
}
​