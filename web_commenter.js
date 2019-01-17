/* メイン関数 */
const main = function() {
  window.onload = createCommenter()

  
}

const createCommenter = function() {
  createFrame()
  
}

/* DOM生成 */
/* frame作成 */ 
const createFrame = function() {
  let frame = document.body.appendChild(document.createElement('div'))
  frame.id = 'frame'
  let channel_tag_sort_area = document.frame.appendChild(document.createElement('div'))
  channel_tag_sort_area.id = 'channel_tag_sort_column'
  let channel_tag_sort_area_content_span = document.channel_tag_sort_area.appendChild(document.createElement('span'))
  channel_tag_sort_area_content_span.id = 'sorting_letter'
  let channel_tag_sort_area_content_now_sorting = document.channel_tag_sort_area.appendChild(document.createElement('div'))
  channel_tag_sort_area_content_now_sorting.id = 'now_sorting_area'
  let channel_tag_sort_area_content_add_channel_textbox = document.channel_tag_sort_area.appendChild(document.createElement('input'))
  channel_tag_sort_area_content_add_channel_textbox.classList.add('channel_textbox')
  let channel_tag_sort_area_content_add_icon_area = document.channel_tag_sort_area_content_add_channel_textbox.appendChild(document.createElement('div'))
  channel_tag_sort_area_content_add_icon_area.id = 'channel_sort_textbox_icon_area'
  let comment_setting_area = document.frame.appendChild(document.createElement('div'))
  comment_setting_area.id = 'comment_setting_area'
  let comment_setting_area_now_sorting = document.frame.appendChild(document.createElement('div'))
  comment_setting_area_now_sorting.id = 'comment_setting_now_sorting'
  let comment_setting_area_content_add_channel_textbox = document.comment_setting_area.appendChild(document.createElement('input'))
  comment_setting_area_content_add_channel_textbox.classList.add('channel_textbox')
  let comment_setting_area_sending_items = document.comment_setting_area.appendChild(document.createElement('div'))
  comment_setting_area_sending_items.id = 'comment_setting_textbox_items'
  let comment_setting_area_comment_textbox = document.comment_setting_area_sending_items.appendChild(document.createElement('input'))
  comment_setting_area_comment_textbox.id = 'comment_sending_textbox'
  let comment_setting_area_sending_button = document.comment_setting_area_sending_items.appendChild(document.createElement('div'))
  comment_setting_area_sending_button = 'comment_sending_button'
}

/* comment */
let comment_area = document.frame.appendChild(document.createElement('div'))
comment_area.id = 'comment_area'

//各読み込み
const 

//message生成