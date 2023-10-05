function cleanSet(set, startString) {
    // Filter the set to only include values that start with the startString.
    const filteredSet = Array.from(set)
    .filter((value) => value.startsWith(startString));
  
    // Map the filtered set to remove the startString from each value.
    const mappedSet = filteredSet.map((value) => value.substring(startString.length));
  
    // Join the mapped set values with a hyphen.
    const joinedSet = mappedSet.join('-');
  
    // Return the joined set string.
    return joinedSet;
  }
  export default cleanSet;