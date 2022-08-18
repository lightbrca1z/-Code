let options = { timeout: 0, title: "", verbose: false, n:null};
console.log(options.timeout ?? 1000);
console.log(options.title ?? "Untitled");
console.log(options.verbose ?? true);
console.log(options.quiet ?? false);
console.log(options.n ?? 10);