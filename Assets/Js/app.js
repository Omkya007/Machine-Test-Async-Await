const cl = console.log;

const sweetAlert = (msg, icon) => {
  Swal.fire({
    title: msg,
    icon: icon,
    timer: 3000,
  });
};

const hrcall = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let err = Math.random() > 0.5 ? false : true;
      if (!err) {
        resolve(`The candidate is fit for interview`);
      } else {
        reject(`Candidate is  not fit for interview`);
      }
    }, 1200);
  });
};

const firstTech = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let err = Math.random() > 0.5 ? false : true;
      if (!err) {
        resolve(`The candidate is fit for 2nd Tech`);
      } else {
        reject(`Candidate is not having basics`);
      }
    }, 1200);
  });
};

const secondTech = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let err = Math.random() > 0.5 ? false : true;
      if (!err) {
        resolve(`The candidate is fit for mgr Tech`);
      } else {
        reject(`Candidate is not  coding  basics`);
      }
    }, 1200);
  });
};

const mgr = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let err = Math.random() > 0.5 ? false : true;
      if (!err) {
        resolve(`The candidate is Selected`);
      } else {
        reject(`Candidate is not selected`);
      }
    }, 1200);
  });
};

const init = async () => {
  try {
    let res = await hrcall();
    cl(res);
    let res1 = await firstTech();
    cl(res1);
    let res2 = await secondTech();
    cl(res2);
    let res3 = await mgr();
    sweetAlert(res3, `success`);
  } catch (error) {
    sweetAlert(error, `error`);
  }
};

init();
