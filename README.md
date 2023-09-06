CSV Reader


![Favicon](https://github.com/shrijit01/Csv-Reader/assets/79890217/a1230ccd-cf35-41bb-8870-f69bcd77ec88)


This project allows you to upload CSV files, view their contents in a table format, and perform various operations on the data. It's designed to be a scalable and user-friendly tool for working with CSV data.

Features
CSV File Upload: Easily upload CSV files with a comma (,) delimiter.

List of Uploaded Files: View a list of all uploaded CSV files.

Dynamic Table Display: Display the data from selected CSV files in a dynamic table with column headers.

Search Functionality: Search and filter data rows based on the entered search criteria (supports searching in any column).

Dynamic Table Headers: Handle different CSV files with varying column headers by dynamically generating table headers.

Sorting: Sort data in ascending and descending order for each column.

File Type Validation: Ensure that only CSV files can be uploaded

![CSV_ReaderINdex](https://github.com/shrijit01/Csv-Reader/assets/79890217/01302942-aeba-472d-a971-e14ed78c3582)


Setup

Follow these steps to set up the project on your local system:

Clone the Repository: Clone this repository to your local machine using the following command:

git clone 🥇 [https://github.com/shrijit_01/Csv_Reader.git](https://github.com/shrijit01/Csv-Reader)

Install Dependencies: Navigate to the project directory and install the required dependencies:

cd Csv Reader
npm install

Start the Application: Run the application using the following command:
npm start
or
npx nodemon

Access the Application: Open your web browser and access the application at http://localhost:3000. You should see the home page with options to upload and view CSV files.

##Usage

Upload CSV Files: Click on the "Upload File " button and select a CSV file from your computer. The system will accept files with a comma (,) delimiter  and click upload  after file selection

View Uploaded Files: After uploading, you'll see a list of all the uploaded CSV files. Click on the file you want to view.

Table Display: The selected CSV file's data will be displayed in a table format with column headers. You can see all the rows and columns.

Search: Use the search box to filter data. Enter a search term, and the table will display only rows that match the criteria. An empty search box shows all the data.

Sorting: You can sort data in ascending and descending order for each column by clicking on the column header.

File Type Validation: The system ensures that only CSV files can be uploaded


Folder Structure
The project follows a scalable folder structure with separate controllers, and routes for a clean and organized codebase.

csv_parser/
├── node_modules/
├── public/
│   ├── stylesheets/
│   └── javascripts/
├── routes/
├── views/
├── app.js
|── .gitignore
└── README.md


License
This project is licensed under the MIT License.

Feel free to contribute to and enhance this CSV Data Viewer project. If you encounter any issues or have suggestions for improvement, please create an issue or pull request. Enjoy working with your CSV data!
