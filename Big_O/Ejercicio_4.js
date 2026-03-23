function compressBoxesTwice(boxes, boxes2) {   
    boxes.forEach(function(boxes) { // O(a)
        console.log(boxes);
    });
    boxes2.forEach(function(boxes2) { // O(b)
        console.log(boxes2);
    });
}

// O(a + b) => O(a + b)