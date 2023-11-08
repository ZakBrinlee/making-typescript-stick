import fetch from "node-fetch";

class SelectorResult {
  #elements
  constructor(elements: NodeListOf<Element>) {
    this.#elements = elements;
  }

  html(contents: string) {
    // Loop over all elements found
    for (const element of this.#elements) {
      // Set the innerHTML with the string provided
      element.innerHTML = contents;
    }
  }

  on<K extends keyof ElementEventMap>(eventName: K, callbackArgument: (event: ElementEventMap[K]) => void) {
    // Loop over all elements found
    this.#elements.forEach((element) => {
      // Add an event listener to each element
      element.addEventListener<K>(eventName, callbackArgument);
    });
  }

  show() {
    // Loop over all elements found
    this.#elements.forEach((element) => {
      // Cast element to HTMLElEMENT (just for this case, not suggested for production code)
      const htmlElement = element as HTMLElement;
      // Change visibility to visible
      htmlElement.style.visibility = "visible";
    });
  }

  hide() {
    // Loop over all elements found
    this.#elements.forEach((element) => {
      // Cast element to HTMLElEMENT (just for this case, not suggested for production code)
      const htmlElement = element as HTMLElement;
      htmlElement.style.visibility = "hidden";
      // Change visibility to hidden
    });
  }
}

function $(selector: string) {
  return new SelectorResult(
    document.querySelectorAll(selector)
  );
}

// namespace needs to follow (lower in code) than the function it is extending
namespace $ {
  export function ajax({
    url,
    callback
  }: {
    url: string,
    callback: (data: any) => void
  }): any {
    return fetch(url)
    .then(response => response.json())
    .then(callback)
  }
}

export default $;

// $("button.continue").html("Next Step...")
// const hiddenBox = $("#banner-message")
// $("#button-container button").on("click", (event) => {
//   hiddenBox.show()
// })
// $.ajax({
//   url: "https://jsonplaceholder.typicode.com/posts/33",
//   success: (result) => {
//     $("#post-info").html(
//       "<strong>" + result.title + "</strong>" + result.body
//     )
//   },
// })