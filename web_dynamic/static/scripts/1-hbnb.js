$(document).ready(function () {
  console.log('amenities');
  const $checkboxes = $(".amenities input[type='checkbox']");
  let checkedAmenities = [];

  $checkboxes.on('change', function () {
    amenityId = $(this).data('id');
    amenityName = $(this).data('name');

    if ($(this).is(':checked')) {
      checkedAmenities.push({
        id: amenityId,
        name: amenityName

      });
    } else {
      checkedAmenities = checkedAmenities.filter(function (amenity) {
        return amenity.id !== amenityId;
      });
    }
    $('.amenities h4').empty();
    for (let index = 0; index < checkedAmenities.length; index++) {
      if (checkedAmenities.length === 1 || index === checkedAmenities.length - 1) {
        $('.amenities h4').append(checkedAmenities[index].name);
      } else {
        $('.amenities h4').append('' + checkedAmenities[index].name + ', ');
      }
    }
    if (checkedAmenities.length >= 3) {
      $('.amenities h4').addClass('text-ellipsis');
    } else {
      $('.amenities h4').removeClass('text-ellipsis');
    }
  });
});
