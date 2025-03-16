function AddTudu2(todoname,tododate){
    return(
<div class="container text-center mt-3 ">
  <div class="row">
    <div style={{textAlign:'left'}}class="col">
      {todoname}
    </div>
    <div style={{textAlign:'left'}} class="col">
      {tododate}
    </div>
    <div class="col">
    <button type="button" class="btn btn-danger kg-button">Danger</button>
    </div>
  </div>
</div>
    );
}
export default AddTudu2;