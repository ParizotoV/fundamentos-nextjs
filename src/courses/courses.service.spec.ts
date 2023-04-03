import { CoursesService } from './courses.service';

describe('CoursesService', () => {
  let service: CoursesService;
  let id;
  let date;

  beforeEach(async () => {
    service = new CoursesService();
    id = '17a2333a-4d06-4d77-840d-d19ec140ba7d';
    date = new Date();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // describe('findOne', () => {
  //   describe('should search user by id', () => {
  //     it('should return course object', async () => {
  //       const courseId = '1';
  //       const expectedCourse = {};

  //       courseRepository.findOne.mockReturnValue(expectedCourse);
  //       const course = await service.findOne(courseId);
  //       expect(course).toEqual(expectedCourse);
  //     });

  //     it('should return NotFoundException', async () => {
  //       const courseId = '1';
  //       courseRepository.findOne.mockReturnValue(undefined);

  //       try {
  //         await service.findOne(courseId);
  //       } catch (error) {
  //         expect(error).toBeInstanceOf(NotFoundException);
  //         expect(error.message).toEqual(`Course ID: ${courseId} not found`);
  //       }
  //     });
  //   });
  // });
});
