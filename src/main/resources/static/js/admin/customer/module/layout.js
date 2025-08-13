const memberLayout = (() => {
    const showList = (membersCriteria) => {
        const memberContainer = document.querySelector(".table-container tbody");
        let text = ``;
        membersCriteria.members.forEach((member) => {
            text += `
                <tr>
                    <td class="td-name">
                        <div class="member-name">${member.memberName}
                            <span class="badge-label badge text-danger ml-2" data-for="93fee9a1-f685-4eca-ba41-83be3901b9c9" data-toggle="tooltip" data-custom-class="" title="" data-original-title="">일반회원</span>
                        </div>
                        <div class="member-id">TestId01</div>
                    </td>
                    <td class="td-amount text-center pr-4 font-weight-bold">테스트01
                        <span class="amount-unit"> 님</span>
                    </td>
                    <td class="td-email">test01@gmail.com</td>
                    <td class="td-phone">010-1234-5678</td>
                    <td class="td-start">2025-06-12</td>
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