import { CoursesService } from './courses.service';
import { CreateCoursesDto } from './dto/create-courses.dto';
import { UpdateCoursesDto } from './dto/update-courses.dto';

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

  it('should list courses', async () => {
    const expectOutputTags = [
      {
        id,
        name: 'nestjs',
        created_at: date,
      },
    ];

    const expectOutputCourse = [
      {
        id,
        name: 'Test',
        description: 'Test description',
        created_at: date,
        tags: expectOutputTags,
      },
    ];

    const mockCoursesRepository = {
      findAll: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourse)),
      find: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourse)),
    };

    // @ts-expect-error defined part of methods
    service['courseRepository'] = mockCoursesRepository;

    const courses = await service.findAll();

    expect(mockCoursesRepository.find).toHaveBeenCalled();
    expect(expectOutputCourse).toStrictEqual(courses);
  });

  it('should gets a courses', async () => {
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
      findOne: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourse)),
    };

    // @ts-expect-error defined part of methods
    service['courseRepository'] = mockCoursesRepository;

    const courses = await service.findOne(id);

    expect(mockCoursesRepository.findOne).toHaveBeenCalled();
    expect(expectOutputCourse).toStrictEqual(courses);
  });

  it('should updates a course', async () => {
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
      update: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourse)),
      save: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourse)),
      preload: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourse)),
    };

    const mockTagsRepository = {
      create: jest.fn().mockReturnValue(Promise.resolve(expectOutputTags)),
      findOne: jest.fn(),
    };

    // @ts-expect-error defined part of methods
    service['courseRepository'] = mockCoursesRepository;
    // @ts-expect-error defined part of methods
    service['tagRepository'] = mockTagsRepository;

    const updateCourseDto: UpdateCoursesDto = {
      name: 'Test',
      description: 'Test description',
      tags: ['nestjs'],
    };

    const course = await service.update(id, updateCourseDto);

    expect(mockCoursesRepository.save).toHaveBeenCalled();
    expect(expectOutputCourse).toStrictEqual(course);
  });

  it('should deletes a courses', async () => {
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
      findOne: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourse)),
      remove: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourse)),
    };

    // @ts-expect-error defined part of methods
    service['courseRepository'] = mockCoursesRepository;

    const course = await service.remove(id);

    expect(mockCoursesRepository.remove).toHaveBeenCalled();
    expect(expectOutputCourse).toStrictEqual(course);
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
