const $container = $(".container");
const $form = $("form");

// funciton that creates thank you message after a successful form submission
const formSuccess = event => {
    event.preventDefault();
    $form.remove();
    const thankYouMessage = "<p class='mt-5 ml-3 animated fadeIn'>Thank you! We will send you more information via email shortly.</p>";
    const button = "<a href='https://www.revolutionprep.com/' class='btn btn-primary mt-4 ml-3 pt-3' role='button'>Return Home</a>";
    const html = thankYouMessage + button;
    $container.append(html);
}

$form.on('submit', formSuccess);