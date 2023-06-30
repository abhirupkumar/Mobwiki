"use server";

import { redirect } from "next/navigation";

export async function handleSearch(formData) {
    const value = formData.get("search");
    redirect(`/search?query=${value}`);
}

export async function handleData(dataJson, val, pageNos, order, tag) {
    const search_value = val.toLowerCase().split(" ");
    var newData = [];
    for (let i = 0; i < dataJson.length; i++) {
        let chk = true;
        for (let j = 0; j < search_value.length; j++) {
            if (!dataJson[i].name.toLowerCase().includes(search_value[j])) {
                chk = false;
                break;
            }
        }
        if (chk) {
            newData.push(dataJson[i]);
        }
    }

    if (order != null) {
        newData = await SortDataByTag(order, tag, newData);
    }

    let page = 1;
    if (pageNos != null) page = parseInt(pageNos);

    const productsPerPage = 15;
    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const totalPages = Math.ceil(newData.length / productsPerPage);

    const data = newData.slice(startIndex, endIndex);

    return { data, page, totalPages }
}

export async function SortDataByTag(order, tag, data) {
    if (order === "asc") {
        data.sort((a, b) => {
            if (tag === "price") {
                let pa = a.price.replace('.', "").replace(',', "").replace(' ', "")
                let intpa = parseInt(pa);
                let pb = b.price.replace('.', "").replace(',', "").replace(' ', "")
                let intpb = parseInt(pb);
                return intpa - intpb;
            }
            else {
                let sa = parseFloat(a.stars)
                let sb = parseFloat(b.stars)
                return sa - sb;
            }
        })
    }
    else {
        data.sort((a, b) => {
            if (tag === "price") {
                let pa = a.price.replace('.', "").replace(',', "").replace(' ', "")
                let intpa = parseInt(pa);
                let pb = b.price.replace('.', "").replace(',', "").replace(' ', "")
                let intpb = parseInt(pb);
                return intpb - intpa;
            }
            else {
                let sa = parseFloat(a.stars)
                let sb = parseFloat(b.stars)
                return sb - sa;
            }
        })
    }

    return data;
}