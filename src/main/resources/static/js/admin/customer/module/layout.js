const customeLayout = (() => {
    const showList = (customersCriteria) => {
        const memberContainer = document.querySelector(".table-container tbody");
        let text = ``;
        customersCriteria.customers.forEach((customer) => {
            text += `
                <tr>
                    <td class="td-name">
                        <div class="member-name">${customer.memberName}
                            <span class="badge-label badge text-danger ml-2" data-for="93fee9a1-f685-4eca-ba41-83be3901b9c9" data-toggle="tooltip" data-custom-class="" title="" data-original-title="">일반회원</span>
                        </div>
                        <div class="member-id">${customer.id}</div>
                    </td>
                    <td class="td-amount text-center pr-4 font-weight-bold">${customer.memberName}
                        <span class="amount-unit"> 님</span>
                    </td>
                    <td class="td-email">${customer.memberEmail}</td>
                    <td class="td-phone">${customer.memberPhone}</td>
                    <td class="td-start">${customer.createdDate}</td>
                    <td class="td-recent">2025-07-29</td>
                    <td class="td-action text-center">
                        <div class="action-btn">
                            <i class="mdi mdi-chevron-right"></i>
                        </div>
                    </td>
                </tr>
           `;
        });
        memberContainer.innerHTML += text;
    }
    return {showList: showList};
})();