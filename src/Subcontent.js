const Subcontent = (props) => {
  return (
    <>
      <div class="col-md text-center">
        <div class="box">
         
          <h4>{props.mycontenthead}</h4>
          <p class="py-3">{props.mycontentpara}</p>
        </div>
      </div>
    </>
  );
};

export default Subcontent;
