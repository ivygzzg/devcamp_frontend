// var app = new Vue ({
//     el: "#app",

//         //informacion
//         data:{
//             counter:0,
//         },


//         //metodos funcionan que cambian la info de data
//         methods: {

//             suma: function () {
//                 this.counter++;

//             },

//             suma: function () {
//                 this.counter--;

//             },


//         },
//         // informacion manejan funciones
//         computed: {


//         },


// });

var directivas = new Vue ({
    el: "#directivas",
   data: {
       newTask: "",
       todo: [
            {
                name: "tarea",
                completed: false,
            }
       ],
   },


    methods: {
        addTask: function (task) {
            var taskObject = {
                name: task,
            };
            
            this.todo.push(taskObject);
            this.newTask = "";
        }
    },

    computed: {
        completedTasks: function () {
            return this.todo.filter (function(task) {
                return task.completed == true;
            })
        },
        uncompletedTasks: function() {
            return this.todo.filter ( function (task){
                return task.completed == false;
            })
        }
    }
})
