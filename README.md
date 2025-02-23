# Mini Spendy

Mini Spendy is a minimalistic expense tracker iOS application designed to help users easily manage their spending incoming and outgoing expenses.
## Tech Stack

- [React Native](https://reactnative.dev/) - A framework for building native applications using React.
- [Expo](https://expo.dev) - A platform for making universal native apps for Android, iOS, and the web with JavaScript and React.
- [Async Storage](https://react-native-async-storage.github.io/async-storage/) - Async Storage is asynchronous, unencrypted, persistent, key-value storage solution for your React Native application.
## Running Locally

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

---
## Project Plan

Ideally, I want this project to be an excellent example project. This means that **speed and learning are the focus** while not being overly critical for real world production use-cases.
## Rough User Flow

1. Splash Screen - See logo / brief description.
	1. New User: User without plans.
		1. Title: Welcome to...
		2. Description of app.
		3. Add Plan View
	2. Returning User: User with a plan.
		1. Title: Welcome back...
		2. Description of app.
		3. Plans View
2. Continue takes you to the initial screen.
	1. Empty - No items, can only add new.
	2. Has items - Add / Edit / Remove items.
3. Creating an Items
	1. Item name - Text Input
	2. Amount - Number input
	3. Interval - Select Control with Monthly ||  Yearly
	4. Type - Select Control Income || Bill
	5. Billing Date
		1. Monthly - day that the bill falls on each month.
		2. Yearly - day that the bill falls on each year.
	6. Note - Text Area Input
4. Removing items - Button, fully removes the item.
5. App controls
	1. Items Sorter
		1. Sort A -> Z
		2. Sort Z -> A
		3. Billing Newest -> Oldest
		4. Billing Oldest -> Newest
	2. Light Mode / Dark Mode

---
## Data Structure

`plan` database items

| Plan table | Value Type | Description                                            |
| ---------- | ---------- | ------------------------------------------------------ |
| id         | string     | Unique ID used for plan references get / set / delete. |
| name       | string     | Name of the plan.                                      |
| planItem   | object     | References a Plan Item ids                             |

| Plan Items | Value Type             | Description                 |
| ---------- | ---------------------- | --------------------------- |
| id         | string                 | Indicates the plan id.      |
| name       | string                 | Name of the planItem.       |
| interval   | enum monthly \| yearly | Billing interval type       |
| amount     | int                    | Amount for the item         |
| currency   | enum USD               | Defaults to currency as USD |
| planId     | string                 | Default plan id             |

---
# Managing Plans

Managing plans involves saving datas to a storage type in order for the app to allow user management of data.
## addPlan() Function

Adds a new plan.

**Used When:**
- Creating a plan

**New Plan:**
- id,  // Auto set id.
- name, // User input name
- addPlanItem(planId)

## removePlan(planId) Function

Remove a specific plan.

**Used when:**
- Using the remove plan button.

## addPlanItem(planId) Function

**Used when:**
- Called adding a new plan.
- Called when adding a new Plan Item.

**New Plan Item:**
- id - Auto generated id.
- interval - DropdownSelect ENUM "monthly" | "weekly"
- amount - INT field
- currency - USD (no other enums at this time)
## editPlanItem(planId, planItemId, key)

**Used When:**
- Updating plan items.

**Goal:**
- Find specific plan and plan item. Then update the specified key.
- If No plan is found, throw error.
- If No planItem is found, throw error.
## removePlanItem(planId, planItemId)

**Used when:**
- Removing a plan.
- Removing a plan item.

**Goal:**
- Find specific plan and plan item. Then remove matched id.
- If No plan is found, throw error.
- If No planItem is found, throw error.
## App Views

The Primary views of the app.

- Splash Screen
- Add Plan (modal) - Form for adding new plan.
- Add Plan Item (modal) - Form for adding new plan item.
- View Plans - List of all plans.
	- When no plans are visible. Only option is to add plans.
	- Shows plan details.
## Data Storage

At the time of planning this project, I'm thinking through a few ideas for storage. Due to this being a quick up and running project, I'm thinking that a simple data storage answer is the best option as opposed to implementing an actual database.

In this case, I think using expo is going to be a good use-case.

See https://docs.expo.dev/versions/latest/sdk/async-storage/
## Build Phase

1. Build out a UI that is a placeholder view for the data structure & app views stated from above.
2. Update the site with data persistence function for [async-storage](https://docs.expo.dev/versions/latest/sdk/async-storage/ ).
3. Lastly, replace app behavior with actual DB use-cases.