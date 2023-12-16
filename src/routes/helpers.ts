export const pathsPublic: {
  [k: string]: string;
} = {
  home: '/',
  productDetails: '/product/:idOrSlug',
};

export const pathsPrivate: {
  [k: string]: string;
} = {
  accountSettings: '/account-settings',
};

export const paths: {
  [k: string]: string;
} = Object.assign({}, pathsPublic, pathsPrivate);

export const checkPathMatch = (pathname: string, paths: { [k: string]: string }) => {
  let isMatch: boolean = false;
  const allPaths: string[] = Object.keys(paths).map((el) => paths[el]);
  const pathFirstSection = pathname.split('/')[1];

  allPaths.forEach((path: string) => {
    if (path.slice(1) === pathFirstSection) isMatch = true;
  });
  console.log(isMatch);

  return isMatch;
};
