/**
 * Sorts a HTML table.
 * 
 * @param {HTMLTableElement} table The table to sort
 * @param {number} column The index of the column to sort
 * @param {boolean} asc Determines if the sorting will be in ascending
 */
function sortTableByColumn(table, column, asc = true) {
    const dirModifier = asc ? 1 : -1;
    const tBody = table.tBodies[0];
    const rows = Array.from(tBody.querySelectorAll("tr"));

    // Sort each row
    const sortedRows = rows.sort((a, b) => {
        const aColText = a.querySelector(`td:nth-child(${ column + 1 })`).textContent.trim();
        const bColText = b.querySelector(`td:nth-child(${ column + 1 })`).textContent.trim();

        return aColText > bColText ? (1 * dirModifier) : (-1 * dirModifier);
    });

    // Remove all existing TRs from the table
    while (tBody.firstChild) {
        tBody.removeChild(tBody.firstChild);
    }

    // Re-add the newly sorted rows
    tBody.append(...sortedRows);

    // Remember how the column is currently sorted
    table.querySelectorAll("th").forEach(th => th.classList.remove("th-sort-asc", "th-sort-desc"));
    table.querySelector(`th:nth-child(${ column + 1})`).classList.toggle("th-sort-asc", asc);
    table.querySelector(`th:nth-child(${ column + 1})`).classList.toggle("th-sort-desc", !asc);
}

document.querySelectorAll(".table th").forEach(headerCell => {
    headerCell.addEventListener("click", () => {
        const tableElement = headerCell.parentElement.parentElement.parentElement;
        const headerIndex = Array.prototype.indexOf.call(headerCell.parentElement.children, headerCell);
        const currentIsAscending = headerCell.classList.contains("th-sort-asc");

        sortTableByColumn(tableElement, headerIndex, !currentIsAscending);
    });
});



const myFunction = () => {
  const trs = document.querySelectorAll('#myTable tr:not(.header)')
  const filter = document.querySelector('#myInput').value
  const regex = new RegExp(filter, 'i')
  const isFoundInTds = td => regex.test(td.innerHTML)
  const isFound = childrenArr => childrenArr.some(isFoundInTds)
  const setTrStyleDisplay = ({ style, children }) => {
      style.display = isFound([
      ...children // <-- All columns
      ]) ? '' : 'none'
  }
  trs.forEach(setTrStyleDisplay)
}





<!--<script>-->

<!--frappe.ready(function() {-->
<!--	var next_start = 20;-->
<!--	var result_wrapper = $(".website-list .result");-->

<!--	$(".website-list .btn-more").on("click", function() {-->
<!--		var btn = $(this);-->
<!--		var data = $.extend(frappe.utils.get_query_params(), {-->
<!--			doctype: "Mentee",-->
<!--			txt: "",-->
<!--			limit_start: next_start,-->
<!--			pathname: location.pathname,-->
<!--		});-->
<!--		data.web_form_name = frappe.web_form_name;-->
<!--		data.pathname = location.pathname;-->
<!--		btn.prop("disabled", true);-->
<!--		return $.ajax({-->
<!--			url:"/api/method/frappe.www.list.get",-->
<!--			data: data,-->
<!--			statusCode: {-->
<!--				200: function(data) {-->
<!--					var data = data.message;-->
<!--					next_start = data.next_start;-->
<!--					$.each(data.result, function(i, d) {-->
<!--						$(d).appendTo(result_wrapper);-->
<!--					});-->
<!--					toggle_more(data.show_more);-->
<!--				}-->
<!--			}-->
<!--		}).always(function() {-->
<!--			btn.prop("disabled", false);-->
<!--		});-->
<!--	});-->
<!--	var toggle_more = function(show) {-->
<!--		if (!show) {-->
<!--			$(".website-list .more-block").addClass("hide");-->
<!--		}-->
<!--	};-->

<!--	if($('.navbar-header .navbar-toggle:visible').length === 1)-->
<!--	{-->
<!--		$('.page-head h1').addClass('list-head').click(function(){-->
<!--			window.history.back();-->
<!--	 	});-->
<!--	}-->
<!--});-->


<!--</script>-->


