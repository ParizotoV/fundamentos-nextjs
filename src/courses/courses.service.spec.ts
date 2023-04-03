import { CoursesService } from './courses.service';
import { CreateCoursesDto } from './dto/create-courses.dto';

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

  it('should create a course', async () => {
    const expectOutputTags = [
      {
        id,
        name: 'nestjs',
        created_at: date,
      },
    ];

    const expectOutputCourse = {
      id,
      name: 'Test',
      description: 'Test description',
      created_at: date,
      tags: expectOutputTags,
    };

    const mockCoursesRepository = {
      create: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourse)),
      save: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourse)),
    };

    const mockTagsRepository = {
      create: jest.fn().mockReturnValue(Promise.resolve(expectOutputTags)),
      findOne: jest.fn(),
    };

    // @ts-expect-error defined part of methods
    service['courseRepository'] = mockCoursesRepository;
    // @ts-expect-error defined part of methods
    service['tagRepository'] = mockTagsRepository;

    const createCourseDTO: CreateCoursesDto = {
      name: 'Test',
      description: 'Test description',
      tags: ['nestjs'],
    };

    const newCourse = await service.create(createCourseDTO);

    expect(mockCoursesRepository.save).toHaveBeenCalled();
    expect(expectOutputCourse).toStrictEqual(newCourse);
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
