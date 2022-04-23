
In this Project, I have used
Space-x API to fetch data.

Features Added:
#1. Filter Condition
#2. Clear All Filters
#3. Show Loading, while Loading data.

Basically, this web app is based on React Functional Components.
and the React Router Dom is used for Routing.
the Home component is on the main route and and the component changed according to the URL of the API without loading the page

As soon as you click the Filter buttons, the UseEffect Hook changes the URL according to the filter applied and refreshes the data.
Before fetching the data the Loading state sets to true and after when the data loaded successfully the loaded state sets to false again.

the color of selected filter gets changed depending on the state of their values.

The Main Component HOME contains the array map function which loads the LoadCard component and passing the data for each element as props to the LoadCard component which enhance the reusability of the react components.