// use Local storages
export function getData() {
    
    const saved = JSON.parse(localStorage.getItem('randomPoem__saved'));

    return saved;

}

export function setData(title, author) {

    let savedPoems = JSON.parse(localStorage.getItem('randomPoem__saved'));

    savedPoems.push(
        {
            title,
            author
        }
    )

    localStorage.setItem('randomPoem__saved', JSON.stringify(savedPoems))

} 
