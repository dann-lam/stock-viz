let smallRadiiSize = 1;

const pointRadiiHandler = (isNews) => {
  //Check to see if isNews's display is on, and whether there is any information to be fetched.
  if (isNews?.isDisplayNews && isNews?.currNews.length > 0) {
    return getNewsRadii(isNews.currNews);
  } else {
    return smallRadiiSize;
  }
};

const getNewsRadii = (newsArr) => {
  const radii = [];
  for (let i = 0; i < newsArr.length; i++) {
    if (newsArr[i] === undefined) {
      radii.push(smallRadiiSize);
    } else {
      radii.push(5);
    }
  }
  return radii;
};

export default pointRadiiHandler;
