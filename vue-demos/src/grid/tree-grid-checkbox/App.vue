<template>
  <div class="vue-root">
    <div class="demo-description">
      The Tree Grid can display checkboxes in the cells by using the column's
      'appearance.showRowHierarchyCheckBoxes' property. By using the 'appearance.allowRowHierarchyTriStateCheckBoxes',
      the checkboxes may appear in indeterminate state depending on the checked
      state of sub-rows.
    </div>
    <smart-grid id="grid"></smart-grid>
    <div class="options">
      <div class="caption">Settings</div>
      <div class="option">
        <smart-check-box checked id="check">Show Checkboxes</smart-check-box>
      </div>
      <div class="option">
        <smart-check-box checked id="tristateCheck">Has Three States</smart-check-box>
      </div>
      <div class="option">
        <smart-check-box checked id="showHideCheck">Show/Hide Root Checkboxes</smart-check-box>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.checkbox.js";
import "smart-webcomponents/source/modules/smart.grid.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      document.readyState === "complete" ? init() : (window.onload = init);
      window.Smart(
        "#grid",
        class {
          get properties() {
            return {
              dataSource: new window.Smart.DataAdapter({
                dataSource: [
                  {
                    EmployeeID: 1,
                    FirstName: "Nancy",
                    LastName: "Davolio",
                    ReportsTo: 2,
                    Country: "USA",
                    Title: "Sales Representative",
                    HireDate: "1992-05-01 00:00:00",
                    BirthDate: "1948-12-08 00:00:00",
                    City: "Seattle",
                    Address: "507 - 20th Ave. E.Apt. 2A"
                  },
                  {
                    EmployeeID: 2,
                    FirstName: "Andrew",
                    LastName: "Fuller",
                    ReportsTo: null,
                    Country: "USA",
                    Title: "Vice President, Sales",
                    HireDate: "1992-08-14 00:00:00",
                    BirthDate: "1952-02-19 00:00:00",
                    City: "Tacoma",
                    Address: "908 W. Capital Way"
                  },
                  {
                    EmployeeID: 3,
                    FirstName: "Janet",
                    LastName: "Leverling",
                    ReportsTo: 2,
                    Country: "USA",
                    Title: "Sales Representative",
                    HireDate: "1992-04-01 00:00:00",
                    BirthDate: "1963-08-30 00:00:00",
                    City: "Kirkland",
                    Address: "722 Moss Bay Blvd."
                  },
                  {
                    EmployeeID: 4,
                    FirstName: "Margaret",
                    LastName: "Peacock",
                    ReportsTo: 2,
                    Country: "USA",
                    Title: "Sales Representative",
                    HireDate: "1993-05-03 00:00:00",
                    BirthDate: "1937-09-19 00:00:00",
                    City: "Redmond",
                    Address: "4110 Old Redmond Rd."
                  },
                  {
                    EmployeeID: 5,
                    FirstName: "Steven",
                    LastName: "Buchanan",
                    ReportsTo: 2,
                    Country: "UK",
                    Title: "Sales Manager",
                    HireDate: "1993-10-17 00:00:00",
                    BirthDate: "1955-03-04 00:00:00",
                    City: "London",
                    Address: "14 Garrett Hill"
                  },
                  {
                    EmployeeID: 6,
                    FirstName: "Michael",
                    LastName: "Suyama",
                    ReportsTo: 5,
                    Country: "UK",
                    Title: "Sales Representative",
                    HireDate: "1993-10-17 00:00:00",
                    BirthDate: "1963-07-02 00:00:00",
                    City: "London",
                    Address: "Coventry House Miner Rd."
                  },
                  {
                    EmployeeID: 7,
                    FirstName: "Robert",
                    LastName: "King",
                    ReportsTo: 5,
                    Country: "UK",
                    Title: "Sales Representative",
                    HireDate: "1994-01-02 00:00:00",
                    BirthDate: "1960-05-29 00:00:00",
                    City: "London",
                    Address: "Edgeham Hollow Winchester Way"
                  },
                  {
                    EmployeeID: 8,
                    FirstName: "Laura",
                    LastName: "Callahan",
                    ReportsTo: 2,
                    Country: "USA",
                    Title: "Inside Sales Coordinator",
                    HireDate: "1994-03-05 00:00:00",
                    BirthDate: "1958-01-09 00:00:00",
                    City: "Seattle",
                    Address: "4726 - 11th Ave. N.E."
                  },
                  {
                    EmployeeID: 9,
                    FirstName: "Anne",
                    LastName: "Dodsworth",
                    ReportsTo: 5,
                    Country: "UK",
                    Title: "Sales Representative",
                    HireDate: "1994-11-15 00:00:00",
                    BirthDate: "1966-01-27 00:00:00",
                    City: "London",
                    Address: "7 Houndstooth Rd."
                  }
                ],
                keyDataField: "EmployeeID",
                parentDataField: "ReportsTo",
                id: "EmployeeID",
                dataFields: [
                  "EmployeeID: number",
                  "ReportsTo: number",
                  "FirstName: string",
                  "LastName: string",
                  "Country: string",
                  "City: string",
                  "Address: string",
                  "Title: string",
                  "HireDate: date",
                  "BirthDate: date"
                ]
              }),
              selection: {
                enabled: true,
                mode: "extended"
              },
              checkBoxes: {
                //	visible: true,
                hasThreeStates: true
              },
              behavior: {
                columnResizeMode: "growAndShrink"
              },
              onRowInit: function(index, row) {
                if (row.id === 2) {
                  row.expanded = true;
                }
              },
              columns: [
                {
                  label: "First Name",
                  dataField: "FirstName",
                  width: 200
                },
                {
                  label: "Last Name",
                  dataField: "LastName",
                  width: 200
                },
                {
                  label: "Title",
                  dataField: "Title",
                  width: 160
                },
                {
                  label: "Birth Date",
                  dataField: "BirthDate",
                  cellsFormat: "d",
                  width: 120
                },
                {
                  label: "Hire Date",
                  dataField: "HireDate",
                  cellsFormat: "d",
                  width: 120
                },
                {
                  label: "Address",
                  dataField: "Address",
                  width: 250
                },
                {
                  label: "City",
                  dataField: "City",
                  width: 120
                },
                {
                  label: "Country",
                  dataField: "Country"
                }
              ]
            };
          }
        }
      );

      function init() {
        const grid = document.querySelector("#grid");
        const showCheckbox = document.querySelector("#check");
        const tristateCheckBox = document.querySelector("#tristateCheck");
        const showHideCheckbox = document.querySelector("#showHideCheck");
        tristateCheckBox.onchange = function() {
          grid.checkBoxes.hasThreeStates = tristateCheckBox.checked;
        };
        grid.checkBoxes.visible = showCheckbox.checked;
        showCheckbox.onchange = function() {
          grid.checkBoxes.visible = showCheckbox.checked;
        };
        showHideCheckbox.onchange = function() {
          for (let i = 0; i < grid.rows.length; i++) {
            const row = grid.rows[i];
            if (!row.leaf) {
              row.allowCheck = showHideCheckbox.checked;
            }
          }
        };
      }
    });
  }
};
</script>

<style>
smart-grid {
  height: auto;
  width: 60%;
}
smart-grid-row {
  height: 40px;
  font-size: 16px;
}

smart-grid-column {
  font-size: 14px;
}

smart-grid-column .smart-icon {
  font-family: "FontAwesome";
  font-size: 16px;
}

smart-grid-cell .custom-icon {
  margin-left: 4px;
  margin-right: 4px;
  font-family: "FontAwesome";
}
</style>
