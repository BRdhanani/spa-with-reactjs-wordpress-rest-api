<?php
/**
 * The template name: Front-End Post
 * //
 */
get_header(); ?>

<?php
$page_id = get_queried_object()->ID;
$page_url = get_permalink(get_queried_object()->ID);
?>


<div id="primary" class="content-area" style=" width: 800px;margin: -73px 215px 0px;" >


  <h2>Todo List</h2>
  <form method="post" action="<?php echo $page_url; ?>">
  
  
    <div class="form-group">
      <label for="title">Task Title:</label>
      <br>
      <input type="text" class="form-control" id="title" name="title" style="width: 100%;">
    </div>
  
  
    <div class="form-group">
      <label for="pwd">Task Description :</label>
      <textarea class="form-control"  name="description"></textarea>
    </div>
    
  <br>
    <button type="submit" class="btn btn-default">Submit</button>
  </form>
  
  


</div>





<?php
get_footer();