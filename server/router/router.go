package router

import (
    "github.com/ateeqhur/go-react-todoapp/middleware" 
    "github.com/gorilla/mux"
)



func router() *mux.Router{

	router:=mux.NewRouter()
	router.HandleFunc("/api/task",middleware.GetAllTasks).Methods("GET","OPTIONS")
	router.HandleFunc("/api/tasks",middleware.CreateTask).Methods("POST","OPTIONS")
	router.HandleFunc("/api/tasks/{id}",middleware.TaskComplte).Methods("PUT","OPTIONS")
	router.HandleFunc("/api/undoTask/{id}",middleware.UndoTask).Methods("PUT","OPTIONS")
	router.HandleFunc("/api/deleteTask/{id}",middleware.deleteTask).Methods("DELETE","OPTIONS")
	router.HandleFunc("/api/DeleteAllTasks",middleware.DeleteAllTasks).Methods("DELETE","OPTIONS")


	return router
}