const Subfeature = (props) => {
  return (
    <>
      <div class="col-md text-center text-md-start">
        <div class="feat text-center">
          <h5>
            <img src={props.myimg} width="70px" alt="icons" srcset="" />
            <h5>{props.myhead}</h5>
          </h5>
          <p>{props.mypara}</p>
        </div>
      </div>
    </>
  );
};

export default Subfeature;
