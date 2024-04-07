import React, { useState, useEffect } from "react";
import data from "../FilterLeft/myntra.json";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { useActions } from "../../store/use-Actions";
import {
  filterRemoveAll,
  filterAdded,
  filterRemoved,
} from "../../actions/FilterActions";
import { selectFilter } from "../../selectors/FilterSelector";
import { useSelector } from "react-redux";

const FilterTop = () => {
  const actions = useActions({
    filterRemoveAll,
    filterAdded,
    filterRemoved,
  });

  const { data: filteredDataFromStore } = useSelector(selectFilter);

  const [accordian, setAccordian] = useState([]);

  useEffect(() => {
    let filterObjects = [];
    data.filters.secondaryFilters.forEach((secondaryFilterItem) => {
      let filterItem = {};
      filterItem.name = secondaryFilterItem.id;
      filterItem.value = false;
      filterObjects.push(filterItem);
    });
    setAccordian(() => filterObjects);
  }, []);

  const showFilters = (id) => {
    // console.log(id);
    // console.log(accord);
    let newAccord = [];
    accordian.forEach((item) => {
      newAccord.push(item);
    });
    newAccord.map((item) => {
      if (item.name == id) {
        item.value = !item.value;
        // setClickedFilter(!clickedFilter);
        // console.log(clickedFilter)
      } else {
        item.value = false;
      }
    });
    setAccordian(() => newAccord);
  };

  const handleFilterAdd = (filterName, valueToAdd) => {
    let otherFilters = filteredDataFromStore.filter(
      (item) => item.name != filterName
    );
    let selectedFilterAllValues =
      filteredDataFromStore.filter((item) => item.name == filterName).length ==
      0
        ? []
        : filteredDataFromStore
            .filter((item) => item.name == filterName)[0]
            ?.values.slice();
    selectedFilterAllValues.push(valueToAdd);
    let overwrittenObj = {};
    overwrittenObj.name = filterName;
    overwrittenObj.values = selectedFilterAllValues;
    otherFilters.push(overwrittenObj);
    console.log(otherFilters);
    actions.filterAdded(otherFilters);
  };

  const handleFilterDelete = (filterName, valueToRemove) => {
    filteredDataFromStore
      .filter((item) => item.name == filterName)
      .map((item) => {
        if (item?.values.length == 1) {
          let otherFilters = filteredDataFromStore.filter(
            (item) => item.name != filterName
          );
          actions.filterAdded(otherFilters);
        } else if (item?.values.length > 1) {
          let otherFilters = filteredDataFromStore.filter(
            (item) => item.name != filterName
          );
          let selectedFilterAllValues =
            filteredDataFromStore.filter((item) => item.name == filterName)
              .length == 0
              ? []
              : filteredDataFromStore
                  .filter((item) => item.name == filterName)[0]
                  ?.values.slice();
          let filterAfterRemoval = selectedFilterAllValues
            .filter((item) => item != valueToRemove)
            .slice();
          let overwrittenObj = {};
          overwrittenObj.name = filterName;
          overwrittenObj.values = filterAfterRemoval;
          otherFilters.push(overwrittenObj);
          actions.filterAdded(otherFilters);
        }
      });
  };

  const handleSelect = (filterName, value, isChecked) => {
    console.log(isChecked + " |" + filterName + "| " + value);
    if (isChecked) {
      handleFilterAdd(filterName, value);
    } else {
      handleFilterDelete(filterName, value);
    }
  };

  const checkCurrentItemIsFiltered = (filterName, filterValue) => {
    return filteredDataFromStore
      .map((filterDataStoreItem) => {
        if (filterDataStoreItem.name == filterName) {
          if (filterDataStoreItem.values.includes(filterValue)) {
            return true;
          }
        }
        return false;
      })
      .filter((item) => item).length > 0
      ? true
      : false;
  };

  return (
    <div className="d-flex filter-top-container">
      <div className="lap-screen-filter">
        <div className="filter-top">
          {data.filters.secondaryFilters.map((secondaryFilterItem) => (
            <div>
              <div>
                <button
                  // className={clickedFilter ? "filter-top-btn" : "filter-top-btn-active"}
                  className={accordian
                    .filter(
                      (accordItem) => secondaryFilterItem.id == accordItem.name
                    )
                    .map((accordItem) =>
                      accordItem.value == true ? (
                        "filter-top-btn-active"
                      ) : (
                        "filter-top-btn"
                      )
                    )}
                  onClick={() => {
                    showFilters(secondaryFilterItem.id);
                  }}
                >
                  {secondaryFilterItem.id}&nbsp;
                  {accordian
                    .filter(
                      (accordItem) => secondaryFilterItem.id == accordItem.name
                    )
                    .map((accordItem) =>
                      accordItem.value == true ? (
                        <FaAngleUp color="#858585" />
                      ) : (
                        <FaAngleDown color="#858585" />
                      )
                    )}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="accord-filter-options">
          {accordian
            .filter((item) => item.value == true)
            .map((item) =>
              data.filters.secondaryFilters
                .filter(
                  (secondaryFilterItem) => secondaryFilterItem.id == item.name
                )
                .map((secondaryFilterItem) =>
                  secondaryFilterItem.filterValues.map((filterValuesItem) => (
                    <div className="filter-options-top">
                      <input
                        type="checkbox"
                        value={filterValuesItem.value.substring(0, 17)}
                        onChange={(eventArgs) =>
                          handleSelect(
                            secondaryFilterItem.id,
                            filterValuesItem.value,
                            eventArgs.target.checked
                          )
                        }
                        checked={checkCurrentItemIsFiltered(
                          secondaryFilterItem.id,
                          filterValuesItem.value
                        )}
                      />
                      &nbsp;
                      <label className="filter-top-text-label">
                        {filterValuesItem.value}
                      </label>
                    </div>
                  ))
                )
            )}
        </div>
      </div>
    </div>
  );
};

export default FilterTop;
