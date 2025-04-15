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
    title: "Project One",
    description: "A brief description of this project and the technologies used.",
    tags: ["React", "TypeScript", "Tailwind"],
    codeSnippet: `function DataVisualizer({ data }) {
  const [filteredData, setFilteredData] = useState(data);
  
  useEffect(() => {
    // Process and transform data for visualization
    const processedData = data.map(item => ({
      ...item,
      value: calculateMetric(item.rawValue)
    }));
    setFilteredData(processedData);
  }, [data]);

  return (
    <div className="visualization-container">
      <ControlPanel onFilter={handleFilterChange} />
      <BarChart data={filteredData} />
    </div>
  );
}`,
    language: "jsx",
    link: "/projects/project-one",
  },
  {
    id: "project-two",
    title: "Project Two",
    description: "A brief description of this project and the technologies used.",
    tags: ["Next.js", "Node.js", "MongoDB"],
    codeSnippet: `// Product inventory management system
import { connectToDatabase } from '../lib/mongodb';

export async function getInventoryLevels() {
  const { db } = await connectToDatabase();
  
  const products = await db
    .collection('products')
    .aggregate([
      { $match: { active: true } },
      { $lookup: {
          from: 'inventory',
          localField: '_id',
          foreignField: 'productId',
          as: 'stock'
        }
      }
    ])
    .toArray();
    
  return products;
}`,
    language: "javascript",
    link: "/projects/project-two",
  },
]

// All projects shown on the projects page
export const allProjects: ProjectData[] = [
  ...featuredProjects,
  {
    id: "project-three",
    title: "Project Three",
    description:
      "A mobile-first progressive web app that works offline and synchronizes data when connection is restored.",
    tags: ["Vue.js", "Firebase", "PWA"],
    codeSnippet: `// Service worker registration for offline functionality
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(registration => {
      console.log('ServiceWorker registration successful');
    }).catch(error => {
      console.error('ServiceWorker registration failed:', error);
    });
  });
}

// Data synchronization when coming back online
window.addEventListener('online', async () => {
  const pendingActions = await db.pendingActions.toArray();
  
  for (const action of pendingActions) {
    try {
      await syncAction(action);
      await db.pendingActions.delete(action.id);
    } catch (error) {
      console.error('Failed to sync action:', error);
    }
  }
  
  showNotification('All changes synced successfully');
});`,
    language: "javascript",
    link: "/projects/project-three",
  },
  {
    id: "project-four",
    title: "Project Four",
    description: "An API service that processes and analyzes large datasets using machine learning algorithms.",
    tags: ["Python", "FastAPI", "TensorFlow"],
    codeSnippet: `from fastapi import FastAPI, File, UploadFile
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
    return "bg-green-100 text-green-800 border-green-200"
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
