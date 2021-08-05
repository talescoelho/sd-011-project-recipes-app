export default function handleClickCheckbox({ target }, item, paramFunction) {
  const { inProgress, setInProgress, id, type } = paramFunction;
  const { checked } = target;
  if (checked) {
    target.parentNode.style.textDecoration = 'line-through';
  } else {
    target.parentNode.style.textDecoration = 'none';
  }
  if (inProgress[type]) {
    if (!checked) {
      setInProgress({
        ...inProgress,
        [type]: {
          ...inProgress[type],
          [id]: inProgress[type][id].filter((value) => value !== item),
        },
      });
    } else if (inProgress[type][id]) {
      setInProgress({
        ...inProgress,
        [type]: {
          ...inProgress[type],
          [id]: [...inProgress[type][id], item],
        },
      });
    } else {
      setInProgress({
        ...inProgress,
        [type]: {
          ...inProgress[type],
          [id]: [item],
        },
      });
    }
  } else {
    setInProgress({
      ...inProgress,
      [type]: {
        ...inProgress[type],
        [id]: [item],
      },
    });
  }
}
