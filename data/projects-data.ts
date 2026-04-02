"use client"

// This file contains all the project data including code snippets
// You can easily replace these with your own projects and code

/** Distinct code-panel look for project cards (projects page). */
export type CodePanelTone = "github" | "sapphire" | "plum" | "forest" | "amber" | "slate"

export interface ProjectData {
  id: string
  title: string
  description: string
  tags: string[]
  codeSnippet: string
  language: string
  link: string
  /** Optional; defaults to GitHub-style dark panel */
  codeTone?: CodePanelTone
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
    link: "https://github.com/Bchappel/8-Ball",
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
    link: "https://github.com/Bchappel/ToDo-List-Application",
  },
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
    title: "Health Dashboard",
    description:
      "iOS SwiftUI app for browsing health metrics: dashboard layout, history views, and reusable row components built with SwiftUI patterns.",
    tags: ["Swift", "SwiftUI", "HealthKit", "Xcode"],
    codeSnippet: `import SwiftUI

struct HealthRowView: View {
    var title: String
    var value: String
    var color: Color

    var body: some View {
        HStack {
            VStack(alignment: .leading, spacing: 4) {
                Text(title)
                    .font(.caption)
                    .foregroundColor(.secondary)

                Text(value)
                    .font(.system(size: 26, weight: .bold))
                    .foregroundColor(color)
            }

            Spacer()

            Image(systemName: "chevron.right")
                .foregroundColor(.gray)
        }
        .padding()
        .frame(maxWidth: .infinity)
        .background(Color(.systemGray6))
        .cornerRadius(12)
        .shadow(color: Color.black.opacity(0.05), radius: 2, x: 0, y: 1)
    }
}`,
    language: "swift",
    link: "https://github.com/Bchappel/HealthDashboard",
    codeTone: "sapphire",
  },
]

// All projects shown on the projects page
export const allProjects: ProjectData[] = [
  ...featuredProjects,
  {
    id: "project-five",
    title: "Planner Web Application",
    description:
      "Next.js planner with protected routes, dashboard home, and modular UI for workouts and nutrition tracking.",
    tags: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    codeSnippet: `import HeroBanner from "@/components/ui/hero-banner"
import NextWorkout from "@/components/home/next-workout"
import TodaysNutrition from "@/components/home/todays-nutrition"

export default function HomePage() {
  return (
    <div className="container mx-auto py-4 sm:py-8 px-4 sm:px-6">
      <HeroBanner name="Braedan" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6">
        <NextWorkout />
        <TodaysNutrition />
      </div>
    </div>
  )
}`,
    language: "tsx",
    link: "https://github.com/Bchappel/Planner-Web-Application",
    codeTone: "plum",
  },
  {
    id: "project-six",
    title: "Point of Sale Application",
    description:
      "Desktop POS built with VB.NET WinForms: product catalog, running subtotals, tax, and receipt line items.",
    tags: ["VB.NET", "WinForms", ".NET"],
    codeSnippet: `Public Class Form1

    Dim subtotal As Decimal = 0
    Dim tax As Decimal = 0
    Dim total As Decimal = 0
    Dim HST As Decimal = 0.13

    Dim Payment As Double = 0
    Dim Change As Double = 0

    'GPUs
    Dim GTX970 As Decimal = 199.99
    Dim GTX980 As Decimal = 225.49
    Dim RTX2080 As Decimal = 1105.27

    'CPUs
    Dim I59600K As Decimal = 395.99
    Dim Ryzen7 As Decimal = 440.88

    Private Sub btnGTX970_Click(sender As System.Object, e As System.EventArgs) Handles btnASUSGTX970.Click
        subtotal = subtotal + GTX970
        tbSubtotal.Text = "$" & subtotal

        tax = subtotal * HST
        tax = Math.Round(tax, 2)
        tbTax.Text = "$" & tax

        total = subtotal + tax
        tbTotal.Text = "$" & total

        lbReceipt.Items.Add("ASUS GTX970 - $" & GTX970)
        btnCheckout.Visible = True
    End Sub`,
    language: "vbnet",
    link: "https://github.com/Bchappel/Point-of-Sale-Application",
    codeTone: "forest",
  },
  {
    id: "project-seven",
    title: "GeoNames",
    description:
      "Team-built Python suite for exploring baby-name CSV data: menus, validation, and pandas-driven counts for Australia and California datasets.",
    tags: ["Python", "Pandas", "CSV"],
    codeSnippet: `#!/usr/bin/env python3
# Libraries
import pandas as pd

def userSelectionHowManyNames():

    locationChoices = ['a', 'A', 'c', 'C']
    genderChoices = ['m', 'M', 'f', 'F']

    print("\\t[ENTER INPUT]: Enter a or A for Australia, c or C for California: ", end = ' ')
    locationChoice = input()
    while locationChoice not in locationChoices:
        print("\\t[ERROR]: Invalid choice, Enter a or A for Australia, c or C for California: ", end = ' ')
        locationChoice = input()

    print("\\t[ENTER INPUT]: Enter m or M for Male, f or F for Female: ", end = ' ')
    genderChoice = input()
    while genderChoice not in genderChoices:
        print("\\t[ERROR]: Invalid choice, Enter m or M for Male, f or F for Female: ", end = ' ')
        genderChoice = input()

    if locationChoice == 'a' or locationChoice == "A":
        austrliaHowMany(genderChoice)
    if locationChoice == 'c' or locationChoice == 'C':
        californiaHowMany(genderChoice)


def austrliaHowMany(genderChoice):

    if(genderChoice == "m" or genderChoice == "M"):
        df = pd.read_csv("sortedFiles/sortedMaleAus.csv")
        count = df['Name'].count()
        print("\\t[OUTPUT]: There are", count, "non-unique Australian Male names.")`,
    language: "python",
    link: "https://github.com/Bchappel/GeoNames",
    codeTone: "amber",
  },
  {
    id: "project-eight",
    title: "Employee Manager",
    description:
      "C CLI for managing an employee linked list: recruit, lookup, print, sort, and count—compiled with a makefile-driven workflow.",
    tags: ["C", "Makefile", "Linked List"],
    codeSnippet: `#include "../include/headerA3.h"

// Function 6: Counts the total number of employees
int countEmployees (a3Emp * headLL){

    int count = 0;
    a3Emp *tempNode = headLL;
    while(tempNode != NULL) {
        tempNode = tempNode->nextEmployee;
        count++;
    }
    return count;
}`,
    language: "c",
    link: "https://github.com/Bchappel/Employee-Manager",
    codeTone: "slate",
  },
]
