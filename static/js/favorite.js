'use strict';

// 이메일, 타이틀 저장
$('#favorites').on('click', save_favorites);
// comment 저장 함수
function save_favorites() {
  let title = titleBucket;
  let name = document.querySelector('#useremail').innerHTML;

  $.ajax({
    type: 'POST',
    url: '/favorites',
    data: {
      name_give: name,
      title_give: title,
    },
    success: function (response) {
      alert(response['msg']);
    },
  });
}
// 이메일, 타이틀 삭제
$('#favorites').off('click', save_delete);
// comment 저장 함수
function save_delete() {
  let title = titleBucket;
  let name = document.querySelector('#useremail').innerHTML;

  $.ajax({
    type: 'POST',
    url: '/favorites/delete',
    data: {
      name_give: name,
      title_give: title,
    },
    success: function (response) {
      alert(response['msg']);
    },
  });
}


//////////////////////////////////////////////////
$(document).ready(function () {
  list();
});

function list() {
  $.ajax({
    type: 'GET',
    url: '/favoritelist',
    data: {},
    success: function (response) {
      let rows = response['favorites'];
      for (let i = 0; i < rows.length; i++) {
        let title = rows[i]['title'];

        $.ajax({
          type: 'POST',
          url: '/favoritelist',
          data: { title_give: title },
          success: function (response) {
            let rows = response['webtoons'][0];
            console.log(rows);

          },
        });
      }
    },
  });
}
