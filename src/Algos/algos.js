export function getMergeAnimations(array) {
  const animations = [];

  if (array.length <= 1) return array;

  const auxArray = array.slice();
  mergeHelper(array, 0, array.length - 1, auxArray, animations);
  return animations;
}

function mergeHelper(mainArray, startIdx, endIdx, auxArray, animations) {
  if (startIdx === endIdx) return;

  const midIdx = Math.floor((startIdx + endIdx) / 2);
  mergeHelper(auxArray, startIdx, midIdx, mainArray, animations);
  mergeHelper(auxArray, midIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, midIdx, endIdx, auxArray, animations);
}

function doMerge(mainArray, startIdx, midIdx, endIdx, auxArray, animations) {
  let i = startIdx;
  let k = startIdx;
  let j = midIdx + 1;

  while (i <= midIdx && j <= endIdx) {
    animations.push([i,j]);
    animations.push([i,j]);

    if (auxArray[i] <= auxArray[j]) {
      animations.push([k, auxArray[i]]);
      mainArray[k++] = auxArray[i++];
    } else {
      animations.push([k, auxArray[j]]);
      mainArray[k++] = auxArray[j++];
    }
  }

  while (i <= midIdx) {
    animations.push([i,i]);
    animations.push([i,i]);

    animations.push([k, auxArray[i]]);
    mainArray[k++] = auxArray[i++];
  }

  while (j <= endIdx) {
    animations.push([j,j]);
    animations.push([j,j]);
    
    animations.push([k, auxArray[j]]);
    mainArray[k++] = auxArray[j++];
  }
}