export class Utils {

    static addOrIncreaseParam(data: any[], newItem: any, param: string): any[] {
        const found = data.find(item => item.id === newItem.id);
        return [...found
            ? data.map(item => item === found
                ? { ...found, [param]: found[param] + 1 }
                : item)
            : [...data, { ...newItem, [param]: 1 }]
        ]
    }

    static removeOrDecreaseParam(data: any[], itemToDelete: any, param: string): any[] {
        const found = data.find(item => item.id === itemToDelete.id);
        return found[param] === 1
            ? data.filter(item => item !== found)
            : data.map(item => item === found
                ? { ...found, [param]: found[param] - 1 }
                : item);
    }

    static remove(data: any[], itemToDelete: { [key: string]: any }): any[] {
        const found = data.find(item => item.id === itemToDelete.id);
        return data.filter(item => item !== found);
    }
}
