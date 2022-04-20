export const slideLeftEntranceStaggered = {
  hidden: {
    opacity: 0,
    x: -15
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      when: 'beforeChildren',
      duration: 0.2,
      staggerChildren: 0.2
    }
  }
};

export const slideLeftEntrance = {
  hidden: {
    opacity: 0,
    x: -15
  },
  visible: {
    opacity: 1,
    x: 0
  }
};
