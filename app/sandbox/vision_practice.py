import os, io
import statistics
from google.cloud import vision_v1
from google.cloud.vision_v1 import types
from google.oauth2 import service_account

class NumberPosition:
    def __init__(self, value, bounds):
        self.value = value
        self.bounds = bounds
        self.x_coordinates = [bound[0] for bound in self.bounds]
        self.y_coordinates = [bound[1] for bound in self.bounds]
        self.x_bounds = [min(self.x_coordinates), max(self.x_coordinates)]
        self.x_range = self.x_bounds[1] - self.x_bounds[0]
        self.y_bounds = [min(self.y_coordinates), max(self.y_coordinates)]
        self.y_range = self.y_bounds[1] - self.y_bounds[0]
        self.average_coordinate_placement = [statistics.mean(self.x_bounds), statistics.mean(self.y_bounds)]

os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = r'../ServiceAccountToken.json'

credentials = service_account.Credentials.from_service_account_file('../ServiceAccountToken.json')

client = vision_v1.ImageAnnotatorClient(credentials=credentials)

test_pic = 'practice_images/big_matrix.png'

with io.open(test_pic, 'rb') as image_file:
    content = image_file.read()

image = vision_v1.types.Image(content=content)

response = client.text_detection(image=image)
texts = response.text_annotations

matrix_number_list = []
for text in texts:
    try:
        number = float(text.description)
    except ValueError:
        if 
        continue

    bounds = []
    for vertex in text.bounding_poly.vertices:
        bounds.append([vertex.x, vertex.y])

    matrix_number = NumberPosition(number, bounds)
    matrix_number_list.append(matrix_number)

print(len(matrix_number_list))

# Determine the number of dimensions along the y-axis
max_x_dimensions = 0
for i in range(len(matrix_number_list)):
    matrix_number1 = matrix_number_list[i]
    x_dimensions = 0
    for j in range(1, len(matrix_number_list)):
        matrix_number2 = matrix_number_list[j]

        # Determine if there is an overlap in span of x-values
        if matrix_number1.x_bounds[1] < matrix_number2.x_bounds[0]:
            # Completely shifted on horizontal axis, no chance of being same column
            continue
        elif matrix_number1.x_bounds[1] >= matrix_number2.x_bounds[0]: # Potential overlap
            # Confirm overlap based on placement of minimum x-value
            if matrix_number1.x_bounds[0] - (matrix_number1.x_range * 0.25) <= matrix_number2.x_bounds[0] \
                <= matrix_number1.x_bounds[0] + (matrix_number1.x_range * 0.25):
                x_dimensions += 1
    max_x_dimensions = max(max_x_dimensions, x_dimensions)
print(max_x_dimensions)
