"use client"

// This file contains all the project data including code snippets
// You can easily replace these with your own projects and code

export interface ProjectData {
  id: string
  title: string
  description: string
  tags: string[]
  codeSnippet: string
  language: string
  link: string
}

// Featured projects shown on the home page
export const featuredProjects: ProjectData[] = [
  {
    id: "project-one",
    title: "8-Ball",
    description: "A browser based 8-ball game using C interfaced with Python.",
    tags: ["C", "Python", "HTML"],
    codeSnippet: 
`#include "phylib.h"

phylib_object * phylib_new_still_ball(unsigned char number, phylib_coord * pos){
    phylib_object * new_ball = (phylib_object *)malloc(sizeof(phylib_object));
    
    if(new_ball == NULL){
      return NULL;
    }
    new_ball->type = PHYLIB_STILL_BALL;
    new_ball->obj.still_ball.number = number;
    new_ball->obj.still_ball.pos = *pos; 

    return new_ball;

}
`,
    language: "cpp",
    link: "/projects/project-one",
  },
  {
    id: "project-two",
    title: "To Do List",
    description: "Command line based To Do list application using Java.",
    tags: ["Java", "Gradle"],
    codeSnippet: 
`public TextUI() {
    input = new Scanner(System.in);

    mainMenu = new Menu("Main Menu");

    try {
        mainMenu.addOption("View list");
        mainMenu.addOption("Add item to list");
        mainMenu.addOption("Complete item in list");
        mainMenu.addOption("Delete item in list");
        mainMenu.addOption("Save list");
        mainMenu.addOption("Load list");
        mainMenu.addOption("Exit");
    } catch (Exception err) {
        System.out.println(err.getMessage());
    }

    list = new TodoList("Coursework Todo List");
}`,
    language: "java",
    link: "/projects/project-two",
  },
]

// All projects shown on the projects page
export const allProjects: ProjectData[] = [
  ...featuredProjects,
  {
    id: "project-three",
    title: "Unity Pong Game",
    description: "A multiplayer Pong game with an AI opponent developed using Unity.",
    tags: ["Unity", "C#"],
    codeSnippet: 
`using UnityEngine;

public class BounceMultiplier : MonoBehaviour{
    public float bounceVel;
    private void OnCollisionEnter2D(Collision2D collision){
        Ball ball = collision.gameObject.GetComponent<Ball>();

        if (ball != null){
            Vector2 normal = collision.GetContact(0).normal;
            ball.AddForce(-normal * this.bounceVel);  
        }
    }
}
`,
    language: "csharp",
    link: "https://github.com/Bchappel/Pong-Game",
  },
  {
    id: "project-four",
    title: "Project Four",
    description: "An API service that processes and analyzes large datasets using machine learning algorithms.",
    tags: ["Python", "FastAPI", "TensorFlow"],
    codeSnippet: 
`from fastapi import FastAPI, File, UploadFile
from tensorflow.keras.models import load_model
import numpy as np
import pandas as pd

app = FastAPI()
model = load_model("models/prediction_model.h5")

@app.post("/api/predict")
async def predict(file: UploadFile = File(...)):
    # Read and process the uploaded dataset
    contents = await file.read()
    df = pd.read_csv(io.StringIO(contents.decode('utf-8')))
    
    # Preprocess data
    processed_data = preprocess_dataset(df)
    
    # Make predictions
    predictions = model.predict(processed_data)
    
    # Format results
    results = format_predictions(predictions, df)
    
    return {
        "status": "success",
        "predictions": results,
        "confidence_score": float(np.mean(predictions[:, 1]))
    }`,
    language: "python",
    link: "/projects/project-four",
  },
  {
    id: "project-five",
    title: "Project Five",
    description: "A high-performance game engine with advanced physics simulation and rendering capabilities.",
    tags: ["C++", "OpenGL", "DirectX"],
    codeSnippet: `#include <iostream>
#include <vector>
#include <memory>
#include "PhysicsEngine.h"
#include "Renderer.h"

class GameEngine {
private:
    std::unique_ptr<PhysicsEngine> physicsEngine;
    std::unique_ptr<Renderer> renderer;
    std::vector<GameObject*> gameObjects;

public:
    GameEngine() {
        physicsEngine = std::make_unique<PhysicsEngine>();
        renderer = std::make_unique<Renderer>();
        std::cout << "Game Engine initialized" << std::endl;
    }

    void update(float deltaTime) {
        // Update physics for all game objects
        physicsEngine->update(gameObjects, deltaTime);
        
        // Render the current frame
        renderer->beginFrame();
        for (auto& obj : gameObjects) {
            renderer->drawObject(obj);
        }
        renderer->endFrame();
    }
};`,
    language: "cpp",
    link: "/projects/project-five",
  },
  {
    id: "project-six",
    title: "Project Six",
    description: "A cross-platform mobile application for tracking fitness goals and workout routines.",
    tags: ["Java", "Android", "SQLite"],
    codeSnippet: `package com.example.fitnessapp;

import android.os.Bundle;
import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import java.util.ArrayList;
import java.util.List;

public class WorkoutActivity extends AppCompatActivity {
    private RecyclerView recyclerView;
    private WorkoutAdapter adapter;
    private List<Workout> workoutList;
    private DatabaseHelper dbHelper;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_workout);
        
        dbHelper = new DatabaseHelper(this);
        workoutList = new ArrayList<>();
        
        // Initialize RecyclerView
        recyclerView = findViewById(R.id.workout_recycler_view);
        recyclerView.setLayoutManager(new LinearLayoutManager(this));
        
        // Load workouts from database
        loadWorkouts();
        
        // Set up adapter
        adapter = new WorkoutAdapter(workoutList, this);
        recyclerView.setAdapter(adapter);
    }
    
    private void loadWorkouts() {
        workoutList.clear();
        workoutList.addAll(dbHelper.getAllWorkouts());
    }
}`,
    language: "java",
    link: "/projects/project-six",
  },
]

// Simplified function to get color class for a language tag
export function getLanguageColorClass(language: string): string {
  // Convert to lowercase for case-insensitive matching
  const lang = language.toLowerCase()

  // JavaScript family
  if (lang.includes("javascript") || lang === "js") {
    return "bg-yellow-100 text-yellow-800 border-yellow-200"
  }

  if (lang.includes("typescript") || lang === "ts") {
    return "bg-blue-100 text-blue-800 border-blue-200"
  }

  if (lang === "jsx" || lang === "tsx") {
    return "bg-blue-100 text-blue-800 border-blue-200"
  }

  // React ecosystem
  if (lang.includes("react")) {
    return "bg-cyan-100 text-cyan-800 border-cyan-200"
  }

  // Next.js
  if (lang.includes("next")) {
    return "bg-black text-white border-gray-700"
  }

  // Vue ecosystem
  if (lang.includes("vue")) {
    return "bg-emerald-100 text-emerald-800 border-emerald-200"
  }

  // Node.js
  if (lang.includes("node")) {
    return "bg-green-100 text-green-800 border-green-200"
  }

  // Python ecosystem
  if (lang === "python" || lang.includes("django") || lang.includes("flask")) {
    return "bg-yellow-100 text-yellow-800 border-yellow-200"
  }

  // Java ecosystem
  if (lang === "java" || lang.includes("spring")) {
    return "bg-orange-100 text-orange-800 border-orange-200"
  }

  // C family
  if (lang === "c" || lang === "cpp" || lang === "c++") {
    return "bg-blue-100 text-blue-800 border-blue-200"
  }

  if (lang === "c#" || lang === "csharp") {
    return "bg-purple-100 text-purple-800 border-purple-200"
  }

  // Web technologies
  if (lang === "html") {
    return "bg-red-100 text-red-800 border-red-200"
  }

  if (lang === "css" || lang === "sass" || lang === "scss") {
    return "bg-blue-100 text-blue-800 border-blue-200"
  }

  if (lang.includes("tailwind")) {
    return "bg-cyan-100 text-cyan-800 border-cyan-200"
  }

  // Databases
  if (lang.includes("sql") || lang.includes("postgresql") || lang.includes("mysql")) {
    return "bg-blue-100 text-blue-800 border-blue-200"
  }

  if (lang.includes("mongo")) {
    return "bg-green-100 text-green-800 border-green-200"
  }

  if (lang.includes("firebase")) {
    return "bg-yellow-100 text-yellow-800 border-yellow-200"
  }

  // Other languages
  if (lang === "go") {
    return "bg-cyan-100 text-cyan-800 border-cyan-200"
  }

  if (lang === "rust") {
    return "bg-amber-100 text-amber-800 border-amber-200"
  }

  if (lang === "ruby") {
    return "bg-red-100 text-red-800 border-red-200"
  }

  if (lang === "php") {
    return "bg-indigo-100 text-indigo-800 border-indigo-200"
  }

  // Tools & Others
  if (lang.includes("docker") || lang.includes("kubernetes")) {
    return "bg-blue-100 text-blue-800 border-blue-200"
  }

  if (lang === "gradle") {
    return "bg-blue-100 text-blue-800 border-blue-200"
  }

  if (lang === "aws") {
    return "bg-yellow-100 text-yellow-800 border-yellow-200"
  }

  if (lang === "azure") {
    return "bg-blue-100 text-blue-800 border-blue-200"
  }

  if (lang === "gcp") {
    return "bg-red-100 text-red-800 border-red-200"
  }

  if (lang.includes("graphql")) {
    return "bg-pink-100 text-pink-800 border-pink-200"
  }

  // Default color for unknown languages
  return "bg-stone-100 text-stone-700 border-stone-200"
}
