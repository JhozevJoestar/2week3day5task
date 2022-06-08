const todoList = {
    items: [
      {
        text: `Завершить текущий челлендж`,
        completed: false,
        // completedSquare: this.completed = true ? '[]' : '[x]' ,
      },
      {
        text: 'Отдохнуть во время перерыва',
        completed: false,
      },
      {
        text: 'Помочь напарнику понять код',
        completed: false,
      },
      {
        text: 'Выиграть в мафию',
        completed: true,
      },
    ],
  
    printAll: function() {
        for(let i in this.items){
            this.print(i)
        }
    },
  
    add: function(text) {
        todoList.items.unshift(
            {
                text: `${text}`,
                completed: false
            }
        )
    },
  
    remove: function(index) {
        this.items.splice(index, 1)
    },

    print: function(index) {
        let x = ' ';
        if (todoList.items[index].completed) {
            x = 'X'
        }
        console.log(`[${x}]${todoList.items[index].text}`)
    },

    complete: function(index) {
        return this.items[index].completed = true
    },
}
