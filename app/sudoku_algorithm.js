console.log("Hello World")



/*
for (let i=0; i<10; i++){
	console.log(double(i))
}
*/

function print(x){
	console.log(x);
}

function multiprint(x){
	print(puzzle);
	for(let i = 0; i < x.length; i++){
		for(let j = 0; j < x[i].length; j++){ 
			console.log(x[i][j]);
		}
	}
}

function getPossibleValues(puzzle){
	for(let i = 0; i < puzzle.length; i++){
		for(let j = 0; j < puzzle[i].length; j++){
			if(puzzle[i][j] == null){
				puzzle[i][j] = [1,2,3,4,5,6,7,8,9];
			}
		}
	}
	return puzzle;
}

let puzzle = [
	[2, null, 6, null, 3, 8, null, null, null],
	[null, 4, 1, 6, 5, null, null, null, null],
	[3, null, null, null, null, 1, 4, null, 8],
	[null, null, 4, 7, 1, 6, null, null, null],
	[null, 3, null, null, 4, null, null, 8, null],
	[null, null, null, 9, 8, 3, 1, null, null],
	[7, null, 3, 1, null, null, null, null, 2],
	[null, null, null, null, 9, 5, 3, 7, null],
	[null, null, null, 3, 2, null, 5, null, 1],
]

print(getPossibleValues(puzzle));



/*

while #null values >0
	loop through all values
		if value == null
			generate list of possible values
				if number possible values == 1
					null = possible value



*/