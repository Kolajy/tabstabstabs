chrome.action.onClicked.addListener(async () => {
  let windows = await chrome.windows.getAll(
    {populate: true}
  );
  console.log(windows)

  tabsList = []
  windows.forEach(window => {
    window['tabs'].forEach(tab => {
      console.log({"tab": tab, "id": tab["id"], "title": tab["title"]});
      tabsList.push([tab['id'], tab['url']]);
    });
  });

  console.log("This the tabs list") 
  console.log(tabsList);

  const dupCheckSet = new Set();
  
  tabsList.forEach(tab => {
    if (dupCheckSet.has(tab[1])){
      console.log(`Removing: ${tab}`);
      chrome.tabs.remove(tab[0]);
    }
    dupCheckSet.add(tab[1]);
  });
});
